export interface Reservas{
    id: number;
    idUsuario: number;
    actividad: string;
    hora: number;
    dia: number;
    mes: number;
    year: number;

    /* constructor(id: number, actividad: string='', hora: number, dia: number, mes: number, year: number){
        this.id = id;
        this.actividad = actividad;
        this.hora = hora;
        this.dia = dia;
        this.mes = mes;
        this.year = year;
    } */
}