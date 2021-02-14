namespace portaleducativo.PortalEducativo {
    export interface TareaRow {
        IdTarea?: number;
        Nombre?: string;
        Descripcion?: string;
        FechaCreacion?: string;
        FechaFinalizacion?: string;
        SubirDocumentoMaestro?: number[];
        SubirDocumentoAlumno?: number[];
        Puntuacion?: number;
        Comentario?: string;
        IdAlumnoTarea?: number;
        IdAlumnoTareaCarnet?: string;
        IdAlumnoTareaNombre?: string;
        IdAlumnoTareaApellido?: string;
        IdAlumnoTareaFechaNacimiento?: string;
        IdAlumnoTareaDireccion?: string;
        IdAlumnoTareaFoto?: number[];
        IdAlumnoTareaSexo?: string;
        IdAlumnoTareaIdUsuarioAlumno?: number;
        IdAlumnoTareaIdRolAlumno?: number;
    }

    export namespace TareaRow {
        export const idProperty = 'IdTarea';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'PortalEducativo.Tarea';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdTarea = "IdTarea",
            Nombre = "Nombre",
            Descripcion = "Descripcion",
            FechaCreacion = "FechaCreacion",
            FechaFinalizacion = "FechaFinalizacion",
            SubirDocumentoMaestro = "SubirDocumentoMaestro",
            SubirDocumentoAlumno = "SubirDocumentoAlumno",
            Puntuacion = "Puntuacion",
            Comentario = "Comentario",
            IdAlumnoTarea = "IdAlumnoTarea",
            IdAlumnoTareaCarnet = "IdAlumnoTareaCarnet",
            IdAlumnoTareaNombre = "IdAlumnoTareaNombre",
            IdAlumnoTareaApellido = "IdAlumnoTareaApellido",
            IdAlumnoTareaFechaNacimiento = "IdAlumnoTareaFechaNacimiento",
            IdAlumnoTareaDireccion = "IdAlumnoTareaDireccion",
            IdAlumnoTareaFoto = "IdAlumnoTareaFoto",
            IdAlumnoTareaSexo = "IdAlumnoTareaSexo",
            IdAlumnoTareaIdUsuarioAlumno = "IdAlumnoTareaIdUsuarioAlumno",
            IdAlumnoTareaIdRolAlumno = "IdAlumnoTareaIdRolAlumno"
        }
    }
}
