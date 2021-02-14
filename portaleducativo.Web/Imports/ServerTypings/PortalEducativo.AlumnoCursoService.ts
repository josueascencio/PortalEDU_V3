namespace portaleducativo.PortalEducativo {
    export namespace AlumnoCursoService {
        export const baseUrl = 'PortalEducativo/AlumnoCurso';

        export declare function Create(request: Serenity.SaveRequest<AlumnoCursoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AlumnoCursoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AlumnoCursoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AlumnoCursoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PortalEducativo/AlumnoCurso/Create",
            Update = "PortalEducativo/AlumnoCurso/Update",
            Delete = "PortalEducativo/AlumnoCurso/Delete",
            Retrieve = "PortalEducativo/AlumnoCurso/Retrieve",
            List = "PortalEducativo/AlumnoCurso/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AlumnoCursoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
