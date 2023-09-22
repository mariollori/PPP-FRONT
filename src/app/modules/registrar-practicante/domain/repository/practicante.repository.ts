import { Observable } from "rxjs";
import { PracticanteEntity } from "../entity";
import { AreaPlanEntity } from "../entity/area-plan.entity";

export interface IPracticanteRepository {
    
    getInfoStudentUpeu(code: string)                     : Observable< PracticanteEntity >;
    postRegisterPracticante(payload: Map<string, object>): Observable< string >; 

    // TODO: esto deberia ir en su modulo pero no entiendo la arq :'v
    getAreasPlan(idPlan: string)                         : Observable< AreaPlanEntity[] >;
    
}
