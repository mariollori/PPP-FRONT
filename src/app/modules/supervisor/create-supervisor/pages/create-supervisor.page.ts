import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputTextBasic } from 'src/app/shared/components/input-text-basic/input-text-basic';

@Component({
    standalone: true,
    selector: 'create-supervisor-page',
    templateUrl: './create-supervisor.page.html',
    imports: [ InputTextBasic, CommonModule ]
})
export class CreateSupervisorPage {

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

        this.formAdvisor = { ...this.formAdvisor, [typeText]: value }

        if ( typeText === 'passwordConfirm' ) {
            if ( this.formAdvisor.password !== this.formAdvisor.passwordConfirm ) {
                this.notSamePasswords = true
                return
            }
            this.notSamePasswords = false
        }


    }

    handleCreateAdvisor() {
        console.log({ form: this.formAdvisor })
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