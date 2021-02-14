namespace portaleducativo.PortalEducativo {
    export interface CursoRow {
        IdCurso?: number;
        Nombre?: string;
        Descripcion?: string;
        FechaInicio?: string;
        FechaFin?: string;
        Estado?: string;
        Aviso?: string;
        Imagen?: number[];
        IdAlumnoCurso?: number;
        IdDocenteCurso?: number;
        IdAlumnoCursoCarnet?: string;
        IdAlumnoCursoNombre?: string;
        IdAlumnoCursoApellido?: string;
        IdAlumnoCursoFechaNacimiento?: string;
        IdAlumnoCursoDireccion?: string;
        IdAlumnoCursoFoto?: number[];
        IdAlumnoCursoSexo?: string;
        IdAlumnoCursoIdUsuarioAlumno?: number;
        IdAlumnoCursoIdRolAlumno?: number;
        IdDocenteCursoNombre?: string;
        IdDocenteCursoApellido?: string;
        IdDocenteCursoTelefono?: string;
        IdDocenteCursoFechaNacimeinto?: string;
        IdDocenteCursoGradoAcademico?: string;
        IdDocenteCursoDireccion?: string;
        IdDocenteCursoFoto?: number[];
        IdDocenteCursoSexo?: string;
        IdDocenteCursoIdUsuarioDocente?: number;
        IdDocenteCursoIdRolDocente?: number;
        IdDocenteCursoIdCentroEducativoDocente?: number;
    }

    export namespace CursoRow {
        export const idProperty = 'IdCurso';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'PortalEducativo.Curso';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdCurso = "IdCurso",
            Nombre = "Nombre",
            Descripcion = "Descripcion",
            FechaInicio = "FechaInicio",
            FechaFin = "FechaFin",
            Estado = "Estado",
            Aviso = "Aviso",
            Imagen = "Imagen",
            IdAlumnoCurso = "IdAlumnoCurso",
            IdDocenteCurso = "IdDocenteCurso",
            IdAlumnoCursoCarnet = "IdAlumnoCursoCarnet",
            IdAlumnoCursoNombre = "IdAlumnoCursoNombre",
            IdAlumnoCursoApellido = "IdAlumnoCursoApellido",
            IdAlumnoCursoFechaNacimiento = "IdAlumnoCursoFechaNacimiento",
            IdAlumnoCursoDireccion = "IdAlumnoCursoDireccion",
            IdAlumnoCursoFoto = "IdAlumnoCursoFoto",
            IdAlumnoCursoSexo = "IdAlumnoCursoSexo",
            IdAlumnoCursoIdUsuarioAlumno = "IdAlumnoCursoIdUsuarioAlumno",
            IdAlumnoCursoIdRolAlumno = "IdAlumnoCursoIdRolAlumno",
            IdDocenteCursoNombre = "IdDocenteCursoNombre",
            IdDocenteCursoApellido = "IdDocenteCursoApellido",
            IdDocenteCursoTelefono = "IdDocenteCursoTelefono",
            IdDocenteCursoFechaNacimeinto = "IdDocenteCursoFechaNacimeinto",
            IdDocenteCursoGradoAcademico = "IdDocenteCursoGradoAcademico",
            IdDocenteCursoDireccion = "IdDocenteCursoDireccion",
            IdDocenteCursoFoto = "IdDocenteCursoFoto",
            IdDocenteCursoSexo = "IdDocenteCursoSexo",
            IdDocenteCursoIdUsuarioDocente = "IdDocenteCursoIdUsuarioDocente",
            IdDocenteCursoIdRolDocente = "IdDocenteCursoIdRolDocente",
            IdDocenteCursoIdCentroEducativoDocente = "IdDocenteCursoIdCentroEducativoDocente"
        }
    }
}
