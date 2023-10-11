import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ButtonStandAlone } from "src/app/shared/components/button/button-shared.standalone";

@Component({
    standalone: true,
    selector: "body-principal-home",
    templateUrl: "./body-principal-home.html",
    imports:[
        CommonModule,
        ButtonStandAlone
    ]
})

export class PrincipalHomeBody{
    constructor(
        private router: Router
    ){}

    pito: number = 1;

    mostrarPito(div:number){
        this.pito = div;
    }


    sexoOpen(){
        this.router.navigate(['menu-items/control-de-practicas-pre-profesionales'])
        return;
    }
}