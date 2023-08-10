import { Component, OnInit } from '@angular/core';
import { ListStudent } from './list-student.class';
interface Steps {
  title: string;
  description: string;
}

@Component({
  selector: 'list-student',
  templateUrl: './list-student.component.html',
})
export class ListStudentComponent implements OnInit {

  steps: Steps[] = [
    { title: 'Registra tus datos', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Registra tu empresa', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Sube los documentos que se te soliciten', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Realizar las evaluaciones', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Sube los documentos que se te soliciten', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Sube los documentos que se te soliciten', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Sube los documentos que se te soliciten', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    { title: 'Sube los documentos que se te soliciten', description: 'All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place. All recipes are written using certain conventions, which define the characteristics of common ingredients. The rules vary from place to place.' },
    
  ]
 
  listStudents    : ListStudent[] = [];
  listStudent     : ListStudent = {
    foto: '',
    name: '',
    code: ''
  }
 

    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

   
}