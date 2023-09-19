import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Storage, ref, getDownloadURL, uploadBytesResumable } from "@angular/fire/storage";

import { PracticanteEntity } from "../../../domain/entity";
import { PracticanteRepository } from "../../../data/repository";

@Component({
    selector: "second-step-register",
    templateUrl: "./second-step-register.page.html"
})
export class SecondStepRegister {

    private ARRAY_EMPTY = 0;

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
        area: "",
        urlProfile: "",
    };

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

    onUploadDocument(event: Event) {

        const elementFile = event.target as HTMLInputElement;

        if ( elementFile.files?.length === this.ARRAY_EMPTY ) {
            alert("No ha seleccionado un archivo.");
            return;
        }

        this.documentCvCharged = elementFile.files![0];

        console.log({ fileUpload: this.documentCvCharged });

    }

    onChangeValue(value: string, typeText: string) {
        this.practicante = { ...this.practicante, [ typeText ]: value };
    }

    async onRegisterPracticante() {

        try {

            // TODO: subida del pdf al firebase
            const urlProfile = await this.uploadDocumentInFirebase();
            console.log(urlProfile);

            // TODO: mandar a registrar al practicante
            this.practicante = { ...this.practicante, urlProfile };

            // TODO: llamado a la api para mandarlo a registrar
            const practicanteCreated = await this.practicanteRepository.postRegisterPracticante( this.practicante )

            // TODO: limpiar formulario

            // TODO: guardar el token en el localstorage
            localStorage.setItem('x-token', JSON.stringify( practicanteCreated.token ))

            // TODO: mandar al dashboard principal
            console.log("Bienvenido usuario!")
            this.router.navigate(['www.pornhub.com'])

        } catch( error ) {
            alert("Oops, error al registrarte.")
            console.log(error)
        }

    }

    private async uploadDocumentInFirebase() {

        const pathFirebase = `documents/students/${ this.practicante.code }/cv`;
        const documentRef  = ref(this.storage, `${ pathFirebase }/${ this.documentCvCharged?.name }`);

        const uploadTask = uploadBytesResumable(documentRef, this.documentCvCharged!);

        const snapshot = await uploadTask

        const downloadUrl = await getDownloadURL( snapshot.ref )

        return downloadUrl

    }

}
