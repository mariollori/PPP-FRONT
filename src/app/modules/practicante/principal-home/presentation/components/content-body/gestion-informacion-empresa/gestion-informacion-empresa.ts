import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RegistrarEmpresaComponent } from "../registrar-empresa/registrar-empresa";

@Component({
    standalone: true,
    selector: "gestion-informacion-empresa",
    templateUrl: "./gestion-informacion-empresa.html",
    imports: [
        CommonModule,
        RegistrarEmpresaComponent
    ]
})

export class GentionInfoEmpresaModule{

    pito2: number = 1;

    mostrarPito2(div:number){
        this.pito2 = div;
    }

    volver(num:number){
        this.pito2=num
    }
}
