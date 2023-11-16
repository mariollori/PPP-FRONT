import { Component, OnInit } from "@angular/core"

@Component({
    standalone: true,
    selector: 'info-basica-practicante',
    templateUrl: './info-basica.component.html',
})
export class InfoBasicaPracticcante implements OnInit {

    userLoggedIn: any | null = null

    ngOnInit() {
        this.userLoggedIn = JSON.parse(sessionStorage.getItem('userbar')!)
    }

}
