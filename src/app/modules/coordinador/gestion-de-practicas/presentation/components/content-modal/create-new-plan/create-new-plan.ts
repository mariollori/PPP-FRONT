import { Component } from "@angular/core";
import { InputTextMedium } from "src/app/shared/components/input-text-medium/input-text-medium";

@Component({
  standalone: true,
  selector: 'create-new-plan',
  templateUrl: './create-new-plan.html',
  imports: [
    InputTextMedium,
  ]
})

export class CreateNewPlanModal {

}
