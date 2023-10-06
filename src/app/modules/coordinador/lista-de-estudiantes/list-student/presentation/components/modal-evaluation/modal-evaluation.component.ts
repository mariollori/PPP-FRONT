import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'modal-evaluation-profile',
    templateUrl: './modal-evaluation.component.html',
    imports: [ CommonModule, FormsModule ]
})
export class ModalEvaluationComponent {

    preguntas: Pregunta[] = [{ pregunta: '', showBoton: false }]

    constructor () { }

    onCrearNuevaPregunta(index: number) {

        const preguntaEncontrada =  this.preguntas[index]

        if ( preguntaEncontrada.pregunta === '' ) {
            alert("Primero rellene el campo de pregunta!")
            return
        }
        
        this.preguntas[index] = { ...preguntaEncontrada, showBoton: true }

        this.preguntas.push({
            pregunta: '',
            showBoton: false
        })

    }

    eliminarPregunta(index: number) {
        this.preguntas.splice(index, 1)
    }

}

interface Pregunta {
    pregunta: string
    showBoton: boolean
}