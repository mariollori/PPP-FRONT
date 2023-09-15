import { StudenModel } from "../models";
import { PracticanteEntity } from "../../domain/entity";


export class PracticanteMapper {

    static modelToEntity(model: StudenModel): PracticanteEntity {

        const entity = new PracticanteEntity({
            code: model.codigo_universitario,
            firstName: model.nombres_completos,
            lastName: model.apellidos_completos,
            dni: model.num_documento,
            yearAcademic: model.anio_study, 
            cycleAcademic: model.ciclo,
            escuela: model.escuela
        });

        return entity;

    }

}
