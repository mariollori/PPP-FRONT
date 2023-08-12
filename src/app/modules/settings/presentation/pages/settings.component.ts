import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',

})
export class Settings  {

    showModal = false;
    toggleModal(){
        this.showModal = !this.showModal;
      }
      steps: any[] = [
        { title: 'Registra tus datos', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
        { title: 'Registra tu empresa', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
        { title: 'Sube los documentos que se te soliciten', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
        { title: 'Realizar las evaluaciones', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' }
      ]
    
   
  

}
