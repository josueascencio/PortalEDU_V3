namespace portaleducativo.PortalEducativo {
    export interface AulaRow {
        IdAula?: number;
        Nombre?: string;
        Seccion?: string;
        IdAlumnoAula?: number;
        IdDocenteAula?: number;
        IdCursoAula?: number;
        IdAlumnoAulaCarnet?: string;
        IdAlumnoAulaNombre?: string;
        IdAlumnoAulaApellido?: string;
        IdAlumnoAulaFechaNacimiento?: string;
        IdAlumnoAulaDireccion?: string;
        IdAlumnoAulaFoto?: number[];
        IdAlumnoAulaSexo?: string;
        IdAlumnoAulaIdUsuarioAlumno?: number;
        IdAlumnoAulaIdRolAlumno?: number;
        IdDocenteAulaNombre?: string;
        IdDocenteAulaApellido?: string;
        IdDocenteAulaTelefono?: string;
        IdDocenteAulaFechaNacimeinto?: string;
        IdDocenteAulaGradoAcademico?: string;
        IdDocenteAulaDireccion?: string;
        IdDocenteAulaFoto?: number[];
        IdDocenteAulaSexo?: string;
        IdDocenteAulaIdUsuarioDocente?: number;
        IdDocenteAulaIdRolDocente?: number;
        IdDocenteAulaIdCentroEducativoDocente?: number;
        IdCursoAulaNombre?: string;
        IdCursoAulaDescripcion?: string;
        IdCursoAulaFechaInicio?: string;
        IdCursoAulaFechaFin?: string;
        IdCursoAulaEstado?: string;
        IdCursoAulaAviso?: string;
        IdCursoAulaImagen?: number[];
        IdCursoAulaIdAlumnoCurso?: number;
        IdCursoAulaIdDocenteCurso?: number;
    }

    export namespace AulaRow {
        export const idProperty = 'IdAula';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'PortalEducativo.Aula';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAula = "IdAula",
            Nombre = "Nombre",
            Seccion = "Seccion",
            IdAlumnoAula = "IdAlumnoAula",
            IdDocenteAula = "IdDocenteAula",
            IdCursoAula = "IdCursoAula",
            IdAlumnoAulaCarnet = "IdAlumnoAulaCarnet",
            IdAlumnoAulaNombre = "IdAlumnoAulaNombre",
            IdAlumnoAulaApellido = "IdAlumnoAulaApellido",
            IdAlumnoAulaFechaNacimiento = "IdAlumnoAulaFechaNacimiento",
            IdAlumnoAulaDireccion = "IdAlumnoAulaDireccion",
            IdAlumnoAulaFoto = "IdAlumnoAulaFoto",
            IdAlumnoAulaSexo = "IdAlumnoAulaSexo",
            IdAlumnoAulaIdUsuarioAlumno = "IdAlumnoAulaIdUsuarioAlumno",
            IdAlumnoAulaIdRolAlumno = "IdAlumnoAulaIdRolAlumno",
            IdDocenteAulaNombre = "IdDocenteAulaNombre",
            IdDocenteAulaApellido = "IdDocenteAulaApellido",
            IdDocenteAulaTelefono = "IdDocenteAulaTelefono",
            IdDocenteAulaFechaNacimeinto = "IdDocenteAulaFechaNacimeinto",
            IdDocenteAulaGradoAcademico = "IdDocenteAulaGradoAcademico",
            IdDocenteAulaDireccion = "IdDocenteAulaDireccion",
            IdDocenteAulaFoto = "IdDocenteAulaFoto",
            IdDocenteAulaSexo = "IdDocenteAulaSexo",
            IdDocenteAulaIdUsuarioDocente = "IdDocenteAulaIdUsuarioDocente",
            IdDocenteAulaIdRolDocente = "IdDocenteAulaIdRolDocente",
            IdDocenteAulaIdCentroEducativoDocente = "IdDocenteAulaIdCentroEducativoDocente",
            IdCursoAulaNombre = "IdCursoAulaNombre",
            IdCursoAulaDescripcion = "IdCursoAulaDescripcion",
            IdCursoAulaFechaInicio = "IdCursoAulaFechaInicio",
            IdCursoAulaFechaFin = "IdCursoAulaFechaFin",
            IdCursoAulaEstado = "IdCursoAulaEstado",
            IdCursoAulaAviso = "IdCursoAulaAviso",
            IdCursoAulaImagen = "IdCursoAulaImagen",
            IdCursoAulaIdAlumnoCurso = "IdCursoAulaIdAlumnoCurso",
            IdCursoAulaIdDocenteCurso = "IdCursoAulaIdDocenteCurso"
        }
    }
}
