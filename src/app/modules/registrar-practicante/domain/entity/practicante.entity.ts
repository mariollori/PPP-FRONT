export class PracticanteEntity {

    code: string;
    firstName: string;
    lastName: string;
    dni: string;
    yearAcademic: string;
    cycleAcademic: string;
    email?: string;
    numberPhone?: string;
    area?: string;
    escuela?: string;
    urlProfile?: string;
    token?: string;

    constructor({ ...props }: PracticanteEntity) {
        this.code = props.code;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.dni = props.dni;
        this.yearAcademic = props.yearAcademic;
        this.cycleAcademic = props.cycleAcademic;
        this.email = props.email;
        this.numberPhone = props.numberPhone;
        this.area = props.area;
        this.escuela = props.escuela;
        this.urlProfile = props.urlProfile;
        this.token = props.token;
    }

}
