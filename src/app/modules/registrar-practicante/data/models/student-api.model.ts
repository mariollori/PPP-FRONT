export interface StudentResponse {
    status:  boolean;
    message: string;
    data:    StudenModel;
}

export interface StudenModel {
    nombres_completos:    string;
    apellidos_completos:  string;
    tipo_doc:             string;
    num_documento:        string;
    codigo_universitario: string;
    anio_study:           string;
    ciclo:                string;
    facultad:             string;
    escuela:              string;
    status:               string;
}
