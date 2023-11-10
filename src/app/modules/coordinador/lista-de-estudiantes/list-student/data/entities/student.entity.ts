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
    ppp: PPP
    company: Company    
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

export interface PPP{
    id: string
    intershipHours: number
    area: string
    startedDate: Date
    finashedDate: Date
    rate: number
    status: boolean
    student: StudentEntity
    advisor: User
}

export interface Company{
    id: string
    name: string
    area: string
    ruc: string
    address: string
    bussinessMentor: string
    dniMentor: string
    cellphoneMentor: string
    emailMentor: string
    academicDegreeMentor: string
    status: boolean
    ppp: PPP
}

export interface Evaluation{
    id: string
    type: string
    score: string
    observationAdvisor: string
    observationBussiessMentor: string
    createAt: Date
    dateFin: Date
    status: boolean
    directedTo: string
    numberAttempts: number
    ppp: PPP
}