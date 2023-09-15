export interface StudenResponse {
    info: string
    data: StudentEntity[]
}

export interface StudentEntity {
    code: string
    cycle: number
    intershipHours: number
    nameCv: string
    urlCv: string
    finalRate: number
    planPPP: string
    user: User
}

export interface User {
    id: string
    userName: string
    password: string
    firstName: string
    lastName: string
    email: string
    cellphone: string
    area: string
    numStudents: number
    urlProfile: string
    status: boolean
}
