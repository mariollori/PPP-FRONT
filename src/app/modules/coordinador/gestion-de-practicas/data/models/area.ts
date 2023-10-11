export class AreaModel{
    info!: string;
    data!: AreaData[];
}

export class AreaData {
    id?: string;
    name!: string;
    description!: string;
    status!: boolean;
}