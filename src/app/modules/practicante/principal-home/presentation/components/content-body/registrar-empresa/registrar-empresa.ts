import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { ButtonStandAlone } from "src/app/shared/components/button/button-shared.standalone";
import { InputTextMedium } from "src/app/shared/components/input-text-medium/input-text-medium";
@Component({
    standalone: true,
    selector: "registrar-empresa",
    templateUrl: "./registrar-empresa.html",
    imports: [
        InputTextMedium,
        ButtonStandAlone,
        CommonModule
    ]
})

export class RegistrarEmpresaComponent{

    @Output() pito = new EventEmitter<number>();

    pito3(){
        this.pito.emit(1)
    }

    
}
