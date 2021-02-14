namespace portaleducativo.PortalEducativo {
    export interface AlumnoCursoRow {
        IdAlumnoCurso?: number;
        IdCursoAlumno?: number;
        FechaInicio?: string;
        FechaFin?: string;
        IdAlumnoCursoCarnet?: string;
        IdAlumnoCursoNombre?: string;
        IdAlumnoCursoApellido?: string;
        IdAlumnoCursoFechaNacimiento?: string;
        IdAlumnoCursoDireccion?: string;
        IdAlumnoCursoFoto?: number[];
        IdAlumnoCursoSexo?: string;
        IdAlumnoCursoIdUsuarioAlumno?: number;
        IdAlumnoCursoIdRolAlumno?: number;
        IdCursoAlumnoNombre?: string;
        IdCursoAlumnoDescripcion?: string;
        IdCursoAlumnoFechaInicio?: string;
        IdCursoAlumnoFechaFin?: string;
        IdCursoAlumnoEstado?: string;
        IdCursoAlumnoAviso?: string;
        IdCursoAlumnoImagen?: number[];
        IdCursoAlumnoIdAlumnoCurso?: number;
        IdCursoAlumnoIdDocenteCurso?: number;
    }

    export namespace AlumnoCursoRow {
        export const idProperty = 'IdAlumnoCurso';
        export const localTextPrefix = 'PortalEducativo.AlumnoCurso';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAlumnoCurso = "IdAlumnoCurso",
            IdCursoAlumno = "IdCursoAlumno",
            FechaInicio = "FechaInicio",
            FechaFin = "FechaFin",
            IdAlumnoCursoCarnet = "IdAlumnoCursoCarnet",
            IdAlumnoCursoNombre = "IdAlumnoCursoNombre",
            IdAlumnoCursoApellido = "IdAlumnoCursoApellido",
            IdAlumnoCursoFechaNacimiento = "IdAlumnoCursoFechaNacimiento",
            IdAlumnoCursoDireccion = "IdAlumnoCursoDireccion",
            IdAlumnoCursoFoto = "IdAlumnoCursoFoto",
            IdAlumnoCursoSexo = "IdAlumnoCursoSexo",
            IdAlumnoCursoIdUsuarioAlumno = "IdAlumnoCursoIdUsuarioAlumno",
            IdAlumnoCursoIdRolAlumno = "IdAlumnoCursoIdRolAlumno",
            IdCursoAlumnoNombre = "IdCursoAlumnoNombre",
            IdCursoAlumnoDescripcion = "IdCursoAlumnoDescripcion",
            IdCursoAlumnoFechaInicio = "IdCursoAlumnoFechaInicio",
            IdCursoAlumnoFechaFin = "IdCursoAlumnoFechaFin",
            IdCursoAlumnoEstado = "IdCursoAlumnoEstado",
            IdCursoAlumnoAviso = "IdCursoAlumnoAviso",
            IdCursoAlumnoImagen = "IdCursoAlumnoImagen",
            IdCursoAlumnoIdAlumnoCurso = "IdCursoAlumnoIdAlumnoCurso",
            IdCursoAlumnoIdDocenteCurso = "IdCursoAlumnoIdDocenteCurso"
        }
    }
}
