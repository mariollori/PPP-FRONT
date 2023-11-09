import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

import { InputTextBasic } from 'src/app/shared/components/input-text-basic/input-text-basic';
import { SupervisorService } from '../services/supervisor.service';

@Component({
    standalone: true,
    selector: 'create-supervisor-page',
    templateUrl: './create-supervisor.page.html',
    imports: [ InputTextBasic, CommonModule ],
    providers: [SupervisorService ]
})
export class CreateSupervisorPage {

    constructor(
        private readonly service: SupervisorService
    ) {  }

    @Output() 
    cerrarModal = new EventEmitter() 

    notSamePasswords = false
    formAdvisor: IFormRegisterAdvisor = {
        names: '',
        lastName: '',
        area: '',
        email: '',
        numPhone: '',
        userName: '',
        password: '',
        passwordConfirm: ''
    }

    onChangeValue(value: string, typeText: string) {

        this.formAdvisor = { ...this.formAdvisor, [ typeText ]: value }

        if ( typeText === 'passwordConfirm' ) {
            if ( this.formAdvisor.password !== this.formAdvisor.passwordConfirm ) {
                this.notSamePasswords = true
                return
            }
            this.notSamePasswords = false
        }


    }

    handleCreateAdvisor() {

        console.log('tratando de crear ps')
        
        const { userName, password, names, lastName, email, numPhone, area } = this.formAdvisor

        try {

            const data = new Map< string, any >()

            data.set('userName', userName)
            data.set('password', password)
            data.set('firstName', names)
            data.set('lastName', lastName)
            data.set('email', email)
            data.set('cellphone', numPhone)
            data.set('area', area)
            data.set('numStudents', 0)
            data.set('urlProfile', `https://source.boringavatars.com/beam/120/${ names }?colors=264653,f4a261,e76f51`)
            data.set('status', true)
            data.set('rolId', '3ecd30a8-837d-42a7-86b7-7a4ffe115371')

            this.service.registrarSupervisor( data )

            this.handleCerrarModal()

        } catch ( error ) {
            alert('Oops, problemas con el servidor')
        }

    }

    handleCerrarModal() {
        this.cerrarModal.emit(this.cerrarModal)
    }

}

interface IFormRegisterAdvisor {
    names: string
    lastName: string
    area: string
    email: string
    numPhone: string

    userName: string
    password: string
    passwordConfirm: string
}