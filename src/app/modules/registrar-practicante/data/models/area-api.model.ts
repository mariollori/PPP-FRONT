export interface AreaPlanResponse {
    info: string;
    data: AreaPlanModel[];
}

export interface AreaPlanModel {
    id:          string;
    name:        string;
    description: string;
    status:      boolean;
}
