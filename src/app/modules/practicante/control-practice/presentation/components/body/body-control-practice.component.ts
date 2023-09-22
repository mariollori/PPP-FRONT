import { CommonModule, NgClass } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModalControlPractice } from "../content-modal/modal-control-practice.component";
import { GlobalModel } from "src/app/shared/components/modal/global-modal";

@Component({
  standalone: true,
  selector: 'body-control-practice',
  templateUrl: './body-control-practice.component.html',
  imports: [ModalControlPractice, GlobalModel, CommonModule],
})
export class BodyControlPractice implements OnInit {
  modalOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  sexo() {
    console.log("asdfghjgfdsghghfd");
    
    this.modalOpen = true;
  }
}