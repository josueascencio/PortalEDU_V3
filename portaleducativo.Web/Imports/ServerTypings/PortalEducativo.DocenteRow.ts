namespace portaleducativo.PortalEducativo {
    export interface DocenteRow {
        IdDocente?: number;
        Nombre?: string;
        Apellido?: string;
        Telefono?: string;
        FechaNacimeinto?: string;
        GradoAcademico?: string;
        Direccion?: string;
        Foto?: number[];
        Sexo?: string;
        IdUsuarioDocente?: number;
        IdRolDocente?: number;
        IdCentroEducativoDocente?: number;
        IdUsuarioDocenteNombre?: string;
        IdUsuarioDocenteCorreo?: string;
        IdRolDocenteNombre?: string;
        IdRolDocenteDescripcion?: string;
        IdCentroEducativoDocenteNombre?: string;
        IdCentroEducativoDocenteDireccion?: string;
        IdCentroEducativoDocenteTelefono?: string;
        IdCentroEducativoDocenteCorreo?: string;
        IdCentroEducativoDocenteTipo?: string;
        IdCentroEducativoDocenteDirector?: string;
    }

    export namespace DocenteRow {
        export const idProperty = 'IdDocente';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'PortalEducativo.Docente';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdDocente = "IdDocente",
            Nombre = "Nombre",
            Apellido = "Apellido",
            Telefono = "Telefono",
            FechaNacimeinto = "FechaNacimeinto",
            GradoAcademico = "GradoAcademico",
            Direccion = "Direccion",
            Foto = "Foto",
            Sexo = "Sexo",
            IdUsuarioDocente = "IdUsuarioDocente",
            IdRolDocente = "IdRolDocente",
            IdCentroEducativoDocente = "IdCentroEducativoDocente",
            IdUsuarioDocenteNombre = "IdUsuarioDocenteNombre",
            IdUsuarioDocenteCorreo = "IdUsuarioDocenteCorreo",
            IdRolDocenteNombre = "IdRolDocenteNombre",
            IdRolDocenteDescripcion = "IdRolDocenteDescripcion",
            IdCentroEducativoDocenteNombre = "IdCentroEducativoDocenteNombre",
            IdCentroEducativoDocenteDireccion = "IdCentroEducativoDocenteDireccion",
            IdCentroEducativoDocenteTelefono = "IdCentroEducativoDocenteTelefono",
            IdCentroEducativoDocenteCorreo = "IdCentroEducativoDocenteCorreo",
            IdCentroEducativoDocenteTipo = "IdCentroEducativoDocenteTipo",
            IdCentroEducativoDocenteDirector = "IdCentroEducativoDocenteDirector"
        }
    }
}
