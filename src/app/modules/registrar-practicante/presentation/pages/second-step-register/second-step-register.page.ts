import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage, ref, getDownloadURL, uploadBytesResumable } from "@angular/fire/storage";

import { PracticanteEntity } from "../../../domain/entity";
import { PracticanteRepository } from "../../../data/repository";
import { AreaPlanEntity } from "../../../domain/entity/area-plan.entity";
import { lastValueFrom } from 'rxjs';

@Component({
    selector: "second-step-register",
    templateUrl: "./second-step-register.page.html"
})
export class SecondStepRegister implements OnInit {

    private TOTAL_MB_ALLOWED = 2000;
    private PLAN_PPP_SELECTED = '452e3d45-9e93-4f72-ace5-c188f6912f8b';

    documentCvCharged: File | undefined = undefined;
    practicante: PracticanteEntity = {
        code: "",
        firstName: "",
        lastName: "",
        dni: "",
        yearAcademic: "",
        cycleAcademic: "",
        email: "",
        numberPhone: "",
        area: "0",
        urlProfile: "",
        password: ""
    };

    areaPlans: AreaPlanEntity[] = [];

    constructor(
        private router: Router,
        private storage: Storage,
        private practicanteRepository: PracticanteRepository
    ) {

        const responseFound = this.router.getCurrentNavigation()?.extras.state as PracticanteEntity;

        if ( !responseFound ) {
            this.router.navigate(['/crear-cuenta']);
            return;
        }

        this.practicante = { ...this.practicante, ...responseFound };

    }

    async ngOnInit(): Promise< void > {
        
        const areaPlasFound = await lastValueFrom( this.practicanteRepository.getAreasPlan(this.PLAN_PPP_SELECTED) )
        this.areaPlans = areaPlasFound

    }

    onUploadDocument(event: Event) {

        const elementFile = event.target as HTMLInputElement;

        if ( this.TOTAL_MB_ALLOWED >= elementFile.files![0].size ) {
            alert("No subas un archivo de mas de 2MB.");
            return;
        }

        this.documentCvCharged = elementFile.files![0];

    }

    onChangeValue(value: string, typeText: string) {
        this.practicante = { ...this.practicante, [ typeText ]: value };
    }

    async onRegisterPracticante() {

        try {

            const urlProfile = await this.uploadDocumentInFirebase();

            const data = new Map< string, any >();

            data.set('urlCv'  , urlProfile);
            data.set('code'   , this.practicante.code,);
            data.set('nameCv' , this.documentCvCharged?.name!);
            data.set('planPPP', this.PLAN_PPP_SELECTED);
            data.set('cycle'  , Number(this.practicante.cycleAcademic));

            const user = {
                userName  : this.practicante.code,
                password  : this.practicante.password!,
                firstName : this.practicante.firstName,
                lastName  : this.practicante.lastName,
                email     : this.practicante.email!,
                cellphone : this.practicante.numberPhone!,
                area      : this.practicante.area!,
                urlProfile:  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            };
            
            data.set('user', user);                        

            const token = await lastValueFrom( this.practicanteRepository.postRegisterPracticante( data ) );

            this.router.navigate(['sign-in']);

        } catch( error ) {
            alert("Oops, error al registrarte.");
            console.log(error);
        }

    }

    private async uploadDocumentInFirebase() {

        const documentRef  = ref(this.storage, `documents/students/${ this.practicante.code }/cv/${ this.documentCvCharged?.name }`);

        const uploadTask = uploadBytesResumable(documentRef, this.documentCvCharged!);

        const snapshot = await uploadTask

        const downloadUrl = await getDownloadURL( snapshot.ref )

        return downloadUrl

    }

}
