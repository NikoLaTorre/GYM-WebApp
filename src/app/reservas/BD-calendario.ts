import { Reservas } from "./reservas.model";

export const HORARIO = [
    { id: 2, actividad: 'Musculación', hora: 8, dia: 1 },
    { id: 3, actividad: 'GAP', hora: 9, dia: 1 },
    { id: 4, actividad: 'Musculación', hora: 10, dia: 1 },
    { id: 5, actividad: 'Musculación', hora: 11, dia: 1 },
    { id: 6, actividad: 'Ritmos', hora: 12, dia: 1 },
    { id: 7, actividad: 'Musculación', hora: 13, dia: 1 },
    { id: 8, actividad: 'HIIT', hora: 14, dia: 1 },
    { id: 9, actividad: 'Musculación', hora: 15, dia: 1 },
    { id: 10, actividad: 'Musculación', hora: 16, dia: 1 },
    { id: 12, actividad: 'GAP', hora: 8, dia: 2 },
    { id: 13, actividad: 'GAP', hora: 9, dia: 2 },
    { id: 14, actividad: 'Musculación', hora: 10, dia: 2 },
    { id: 15, actividad: 'Musculación', hora: 11, dia: 2 },
    { id: 16, actividad: 'Ritmos', hora: 12, dia: 2 },
    { id: 17, actividad: 'Musculación', hora: 13, dia: 2 },
    { id: 18, actividad: 'HIIT', hora: 14, dia: 2 },
    { id: 19, actividad: 'Musculación', hora: 15, dia: 2 },
    { id: 20, actividad: 'Musculación', hora: 16, dia: 2 },
    { id: 32, actividad: 'Musculación', hora: 8, dia: 3 },
    { id: 33, actividad: 'HIIT', hora: 9, dia: 3 },
    { id: 34, actividad: 'Musculación', hora: 10, dia: 3 },
    { id: 35, actividad: 'Musculación', hora: 11, dia: 3 },
    { id: 36, actividad: 'HIIT', hora: 12, dia: 3 },
    { id: 37, actividad: 'Musculación', hora: 13, dia: 3 },
    { id: 38, actividad: 'HIIT', hora: 14, dia: 3 },
    { id: 39, actividad: 'Musculación', hora: 15, dia: 3 },
    { id: 30, actividad: 'HIIT', hora: 16, dia: 3 },
    { id: 42, actividad: 'Musculación', hora: 8, dia: 4 },
    { id: 43, actividad: 'GAP', hora: 9, dia: 4 },
    { id: 44, actividad: 'Musculación', hora: 10, dia: 4 },
    { id: 45, actividad: 'Musculación', hora: 11, dia: 4 },
    { id: 46, actividad: 'Funcional', hora: 12, dia: 4 },
    { id: 47, actividad: 'Funcional', hora: 13, dia: 4 },
    { id: 48, actividad: 'Funcional', hora: 14, dia: 4 },
    { id: 49, actividad: 'Musculación', hora: 15, dia: 4 },
    { id: 40, actividad: 'Musculación', hora: 16, dia: 4 },
    { id: 52, actividad: 'Musculación', hora: 8, dia: 5 },
    { id: 53, actividad: 'Musculación', hora: 9, dia: 5 },
    { id: 54, actividad: 'Musculación', hora: 10, dia: 5 },
    { id: 55, actividad: 'Musculación', hora: 11, dia: 5 },
    { id: 56, actividad: 'Musculación', hora: 12, dia: 5 },
    { id: 57, actividad: 'Musculación', hora: 13, dia: 5 },
    { id: 58, actividad: 'Musculación', hora: 14, dia: 5 },
    { id: 59, actividad: 'Musculación', hora: 15, dia: 5 },
    { id: 50, actividad: 'Musculación', hora: 16, dia: 5 }
];

export const RESERVAS_USUARIOS: Reservas[] = [
];

export const CLASES = [
    {id: 0, actividad: 'Musculación', descripcion: 'La musculación es una disciplina que requiere tiempo, dedicación y esfuerzo. Como su propio nombre indica, su objetivo es el desarrollo de los músculos.', profesor:'Miguel Hernandez'},
    {id: 1, actividad: 'GAP', descripcion: 'GAP son las iniciales de «Glúteos, Abdomen y Piernas». Se trata de una rutina de tonificación en la que se trabajan estas áreas en las que están implicados algunos de los músculos más grandes del cuerpo y aquellos que sostienen la espalda y la postura.', profesor:'Camila Pereyra'},
    {id: 2, actividad: 'HIIT', descripcion: 'El HIIT (siglas de “High Intensity Interval Trainging”, que significa “entrenamiento interválico de alta intensidad”) es un tipo de entrenamiento deportivo basado en sesiones de intervalos cortos y muy intensos que alternan esfuerzo y recuperación.', profesor:'Ismael Aguilar'},
    {id: 3, actividad: 'Funcional', descripcion: 'El entrenamiento funcional se basa en realizar ejercicios que se adaptan a los movimientos naturales del cuerpo humano para trabajar de forma global músculos y articulaciones.', profesor:'Matias Fernandez'},
]