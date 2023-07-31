import { AfterViewInit, Component } from '@angular/core';
interface Steps {
  title: string;
  description: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements AfterViewInit {

  steps: Steps[] = [
    { title: 'Registra tus datos', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Registra tu empresa', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Sube los documentos que se te soliciten', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Realizar las evaluaciones', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' }
  ]

  constructor() {
  }

  currentStepIndex = 0;
  showModal = false;
  
  toggleModal(){
    this.showModal = !this.showModal;
  }
  selectStep(index: number) {
    this.currentStepIndex = index;
  }

  ngAfterViewInit(): void {
  }



}
