namespace portaleducativo.PortalEducativo {
    export namespace CentroEducativoService {
        export const baseUrl = 'PortalEducativo/CentroEducativo';

        export declare function Create(request: Serenity.SaveRequest<CentroEducativoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CentroEducativoRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CentroEducativoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CentroEducativoRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "PortalEducativo/CentroEducativo/Create",
            Update = "PortalEducativo/CentroEducativo/Update",
            Delete = "PortalEducativo/CentroEducativo/Delete",
            Retrieve = "PortalEducativo/CentroEducativo/Retrieve",
            List = "PortalEducativo/CentroEducativo/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CentroEducativoService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
