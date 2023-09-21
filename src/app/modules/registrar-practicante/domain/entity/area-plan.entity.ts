export class AreaPlanEntity {
    
    id:          string;
    name:        string;
    description: string;
    status?:     boolean;

    constructor({ ...props }: AreaPlanEntity) {
        this.id = props.id;
        this.name = props.name;
        this.description = props.description;
        this.status = props.status;
    }

}