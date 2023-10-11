export class PlanModel{
    info!: string;
    data!: PlanData[];
}

export class PlanData {
    id!: string;
    name!: string;
    intershipHours!:number;
    startDate!:string;
    endDate!:string;
    bannerUrl:[]=[]
    description!: string;
    status!: boolean;
}
