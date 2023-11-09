import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'

import { routesAccess } from 'src/app/config/api/network_api'

@Injectable()
export class SupervisorService {

    private routes = routesAccess

    constructor(
        private readonly http: HttpClient
    ) { }

    registrarSupervisor(payload: Map<string, object>) {

        this.http.post(this.routes.registerUser, Object.fromEntries(payload)).subscribe(x => console.log({ x }))

    }

    getSupervisores() {
        return this
            .http
            .get<any>(this.routes.userGetAll).pipe(
                map((response) => {
                    return response.data
                })
            )
    }

    asignSupervisorToStudent(studentId: string, supervisorId: string) {
        return this
            .http
            .get<any>(`/${supervisorId}/${studentId}`).pipe(
                map((response) => {
                    return response.data
                })
            )
    }

}
