import { Observable } from "rxjs";
import { PracticanteEntity } from "../entity";

export interface IPracticanteRepository {
    
    getInfoStudentUpeu(code: string): Observable< PracticanteEntity >;
    postRegisterPracticante(payload: PracticanteEntity): Promise< PracticanteEntity >; 
    
}
