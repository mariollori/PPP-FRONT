import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StudentServiceApi } from '../../../domain/services/student.services';
import { lastValueFrom } from 'rxjs';
import { LoadingPageComponent } from 'src/app/shared/components/loading/loading-page.component';

@Component({
    standalone: true,
    selector: 'modal-evaluation-profile',
    templateUrl: './modal-evaluation.component.html',
    imports: [ CommonModule, FormsModule, LoadingPageComponent ]
})
export class ModalEvaluationComponent {

    @Output() cerrarModal = new EventEmitter<void>()

    preguntas: Pregunta[] = [{ pregunta: '', showBoton: false }]

    constructor (
        private readonly server: StudentServiceApi
    ) { }

    async crearEvaluacion() {
        
        try {

            const payload = new Map<string, any>()
    
            payload.set('type', 'Satisfaccion')
            payload.set('dateEnd', new Date( new Date().getDay() + 7 ) )

            // aqui va el codigo del estudiante o si no es para el va el del supervisor de empresa
            payload.set('directedTo', '201711882') 
            payload.set('ppp', '3096059e-7456-4fa5-b029-b6fe0a3be4b2')
    
            const arregloSoloPreguntas = this.preguntas.map( x => ({ "question": x.pregunta }) )
    
            payload.set('questions', arregloSoloPreguntas )

            await lastValueFrom(this.server.createEvaluation( payload ))
            
            alert('Evaluación creada correctamente!')
            
            this.cerrarModal.emit()

        } catch( error ) {

            console.log({ error })
            
        }

    }

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