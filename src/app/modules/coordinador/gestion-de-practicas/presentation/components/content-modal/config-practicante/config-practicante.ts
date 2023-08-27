import { Component } from "@angular/core";
import { InputTextMedium } from "src/app/shared/components/input-text-medium/input-text-medium";

@Component({
  standalone: true,
  selector: 'modal-config-practicante',
  templateUrl: './config-practicante.html',
  imports: [
    InputTextMedium,
  ]
})

export class ConfigPracticanteModal {

}
