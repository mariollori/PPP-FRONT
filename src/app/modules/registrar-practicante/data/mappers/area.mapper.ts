import { AreaPlanEntity } from "../../domain/entity/area-plan.entity";
import { AreaPlanModel } from '../models/area-api.model';

export class AreaMapper {
    
    static modelsToEntities(models: AreaPlanModel[]): AreaPlanEntity[] {

        const entities = models.map( model => {
            
            const entity = new AreaPlanEntity({
                id: model.id,
                name: model.name,
                description: model.description,
                status: model.status
            })

            return entity;
        })

        return entities;

    }

}