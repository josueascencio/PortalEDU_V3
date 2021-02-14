namespace portaleducativo.PortalEducativo {
    export interface AlumnoRow {
        IdAlumno?: number;
        Carnet?: string;
        Nombre?: string;
        Apellido?: string;
        FechaNacimiento?: string;
        Direccion?: string;
        Foto?: number[];
        Sexo?: string;
        IdUsuarioAlumno?: number;
        IdRolAlumno?: number;
        IdUsuarioAlumnoNombre?: string;
        IdUsuarioAlumnoCorreo?: string;
        IdRolAlumnoNombre?: string;
        IdRolAlumnoDescripcion?: string;
    }

    export namespace AlumnoRow {
        export const idProperty = 'IdAlumno';
        export const nameProperty = 'Carnet';
        export const localTextPrefix = 'PortalEducativo.Alumno';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdAlumno = "IdAlumno",
            Carnet = "Carnet",
            Nombre = "Nombre",
            Apellido = "Apellido",
            FechaNacimiento = "FechaNacimiento",
            Direccion = "Direccion",
            Foto = "Foto",
            Sexo = "Sexo",
            IdUsuarioAlumno = "IdUsuarioAlumno",
            IdRolAlumno = "IdRolAlumno",
            IdUsuarioAlumnoNombre = "IdUsuarioAlumnoNombre",
            IdUsuarioAlumnoCorreo = "IdUsuarioAlumnoCorreo",
            IdRolAlumnoNombre = "IdRolAlumnoNombre",
            IdRolAlumnoDescripcion = "IdRolAlumnoDescripcion"
        }
    }
}
