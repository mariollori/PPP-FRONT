import { Component } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Router } from "@angular/router";

import { PracticanteRepository } from "../../../data/repository";

@Component({
    selector: "first-step-register",
    templateUrl: "./first-step-register.page.html"
})
export class FirstStepRegister {

    private STRING_EMPTY    = "";
    private SCHOOL_ACCEPTED = "EP Ingeniería de Sistemas";
    private CYCLE_ACCEPTED  = 5;
    
    isShowError = false;
    msgError    = "";
    codeStudent = "";

    constructor(
        private practicanteRepository: PracticanteRepository,
        private router: Router
    ){ }

    onChangeValue(value: string, typeText: string) {

        this.codeStudent = ( typeText === "codeStudent" ) ? value : "";

    }

    async onValidate() {

        if ( this.codeStudent === this.STRING_EMPTY ) return;

        try {

            const response = await lastValueFrom( this.practicanteRepository.getInfoStudentUpeu( this.codeStudent ) );
    
            if ( this.SCHOOL_ACCEPTED !== response.escuela ) {
                this.onShowMessageError(`Lo sentimos ${ response.firstName } no perteneces a ${ this.SCHOOL_ACCEPTED }.`);
                return;
            }
            
            if ( this.CYCLE_ACCEPTED > Number(response.cycleAcademic) ) {
                this.onShowMessageError(`Aún no perteneces al ciclo permitido.`);
                return;
            }

            this.router.navigate(['/crear-cuenta-info'], { state: response });

        } catch ( error ) {

            this.onShowMessageError("Ingrese un codigo correcto!");

        }


    }

    private onShowMessageError(msg: string) {
        
        this.isShowError = true;
        
        this.msgError = msg;

        setTimeout(() => {
            this.isShowError = false;
        }, 5000 )

    }

}
