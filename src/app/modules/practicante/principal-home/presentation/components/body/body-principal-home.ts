import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ButtonStandAlone } from "src/app/shared/components/button/button-shared.standalone";

@Component({
    standalone: true,
    selector: "body-principal-home",
    templateUrl: "./body-principal-home.html",
    imports:[
        ButtonStandAlone
    ]
})

export class PrincipalHomeBody{
    constructor(
        private router: Router
    ){}

    sexoOpen(){
        this.router.navigate(['/control-de-practicas-pre-profesionales'])
        return;
    }
}