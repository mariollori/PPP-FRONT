import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InputTextMedium } from "src/app/shared/components/input-text-medium/input-text-medium";
import { GlobalModel } from "src/app/shared/components/modal/global-modal";

@Component({
  standalone: true,
  selector: 'modal-config-practicante',
  templateUrl: './config-practicante.html',
  imports: [
    InputTextMedium,
    GlobalModel,
    CommonModule
  ]
})

export class ConfigPracticanteModal {

  isShowModal = false
  documentCvCharged: File | undefined = undefined

  onUploadDocument(event: Event) {

    const elementFile = event.target as HTMLInputElement;

    this.isShowModal = true
    this.documentCvCharged = elementFile.files![0];

    console.log("entro a abrir el modalsito")

  }
}
