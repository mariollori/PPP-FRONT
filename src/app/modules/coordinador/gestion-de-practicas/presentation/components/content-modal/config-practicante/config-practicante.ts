import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InputTextMedium } from "src/app/shared/components/input-text-medium/input-text-medium";
import { GlobalModel } from "src/app/shared/components/modal/global-modal";
import * as XLSX from 'xlsx'

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
  cantidadEstudiantes: number | undefined = undefined
  fechaSubida: string | undefined = undefined
  jsonData: any[] = [];

  onUploadDocument(event: Event) {

    const elementFile = event.target as HTMLInputElement;
    const file = elementFile.files![0];

    this.isShowModal = true
    this.documentCvCharged = elementFile.files![0];

    if (file) {
      const reader = new FileReader();
    reader.onload = (event: any) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      

      // Calcula la cantidad de estudiantes
      const cantidadEstudiantes = jsonData.length;

      // Obtiene la fecha actual como fecha de subida
      const fechaSubida = new Date().toLocaleDateString(); // Puedes ajustar el formato de fecha según tu preferencia

      // Guarda la cantidad de estudiantes y la fecha de subida en propiedades del componente
      this.cantidadEstudiantes = cantidadEstudiantes;
      this.fechaSubida = fechaSubida;

      // Actualiza el estado para mostrar el modal
      this.isShowModal = true;
    
      this.jsonData = jsonData;

      // Resto del código
    };
    reader.readAsArrayBuffer(file);
  }

  }
}
