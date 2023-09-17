import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PracticanteEntity } from "../../../domain/entity";

@Component({
    selector: "second-step-register",
    templateUrl: "./second-step-register.page.html"
})
export class SecondStepRegister implements OnInit {

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
    }

    constructor(
        private router: Router
    ) {
        this.practicante = { ...this.practicante, ...this.router.getCurrentNavigation()?.extras.state as PracticanteEntity };
    }

    ngOnInit(): void { }

    onChangeValue(value: string, typeText: string) {
        this.practicante = { ...this.practicante, [ typeText ]: value };
    }

    onRegisterPracticante() {
        console.log('registrar', { practicante: this.practicante });
    }

}
