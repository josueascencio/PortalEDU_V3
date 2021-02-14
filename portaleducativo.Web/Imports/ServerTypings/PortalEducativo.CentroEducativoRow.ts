namespace portaleducativo.PortalEducativo {
    export interface CentroEducativoRow {
        IdCentroEducativo?: number;
        Nombre?: string;
        Direccion?: string;
        Telefono?: string;
        Correo?: string;
        Tipo?: string;
        Director?: string;
    }

    export namespace CentroEducativoRow {
        export const idProperty = 'IdCentroEducativo';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'PortalEducativo.CentroEducativo';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IdCentroEducativo = "IdCentroEducativo",
            Nombre = "Nombre",
            Direccion = "Direccion",
            Telefono = "Telefono",
            Correo = "Correo",
            Tipo = "Tipo",
            Director = "Director"
        }
    }
}
