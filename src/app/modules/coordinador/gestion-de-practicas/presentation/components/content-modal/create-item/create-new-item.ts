import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  Storage
} from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InputTextMedium } from 'src/app/shared/components/input-text-medium/input-text-medium';
import { CommonModule } from '@angular/common';
import { GlobasToast } from 'src/app/shared/components/toast/globas-toast';
import { GlobalBgAlerts } from 'src/app/shared/components/bg-alerts/global-bg-alerts';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewItemService } from '../../../../domain/services/new-item.service';
import { PlanData, PlanModel } from '../../../../data/models/plan';
import { AreaData } from '../../../../data/models/area';


export class NewItem {
  type:string = '';
  plan:string = '';
  question:string = '';
  area:string= '';
}


@Component({
  standalone: true,
  selector: 'create-new-item',
  templateUrl: './create-new-item.html',
  styleUrls: ['create-new-item.css'],
  imports: [InputTextMedium, CommonModule, GlobasToast, GlobalBgAlerts,ReactiveFormsModule],
})
export class CreateNewItemModal implements OnInit {

  itemsEvaluation : NewItem[] = [];
  planSelected:string='';
  plans:PlanData[]=[]
  areas:AreaData[]=[]
  newItemForm :any =  FormGroup;
  
  toast: boolean = false;
  message: string = '';
  typeToast: string = '';

  validated: boolean = false;
  alert: string = '';
  actionAlrt!: void;

  

  

  
  private buildForm() {
    const controls = {
      question: ['', Validators.required],
      plan: ['', Validators.required],
      type: ['', Validators.required],
      area: ['', Validators.required],
    };
    this.newItemForm = this.fb.group(controls)

    this.newItemForm.get('plan')?.valueChanges.subscribe((newValue:any) => {
      this.areas = [];
      this.getAreaByPlan(newValue);
    });
  }

  constructor(
    private router: Router,
    private newItemService:NewItemService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  obtenerInputValue(value: string, typeText: string) {
    this.newItemForm.get(typeText)?.setValue(value);
  }


  ngOnInit() { 
    this.buildForm();
    this.getPlanAll();
  }

  
    eliminarPregunta(pregunta: any){
    console.log('Pq chucha no funca')
    const indice = this.itemsEvaluation.findIndex((elemento,indice) => {
      return elemento.question === pregunta;
    });
    this.itemsEvaluation.splice(indice,1);
    console.log(this.itemsEvaluation)

  }
  

  getPlanAll(){
    this.newItemService.getPlanAll().subscribe(
      (data:PlanModel)=>{
        this.plans = data.data ;
      }
    )
  }

  getAreaByPlan(planId:string){
   
    this.newItemService.getAreaByPlan(planId).subscribe(
      (area)=>{
        this.areas = area.data;
      }
    )
  }

  
  actionAlert() {
    if (!this.validated) this.validated = true;
    else this.validated = false;

    this.cdr.detectChanges();
  }


  addNewItem(){
    this.markFormGroupTouched(this.newItemForm);
    var newItem = new NewItem();
    if(this.newItemForm.invalid) return;
    newItem = this.newItemForm.value;
    this.itemsEvaluation.push(newItem);
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  postAll(){
    this.itemsEvaluation.forEach((value)=>{
      try {
        this.newItemService.createQuestion(value)
      } catch (error) {
        throw error;
      }
    })
  }

  no() {
    this.validated = false;
  }
  prueba() {
    console.log('devuelve?');
  }
}
