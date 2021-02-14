
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class CentroEducativoGrid extends Serenity.EntityGrid<CentroEducativoRow, any> {
        protected getColumnsKey() { return 'PortalEducativo.CentroEducativo'; }
        protected getDialogType() { return CentroEducativoDialog; }
        protected getIdProperty() { return CentroEducativoRow.idProperty; }
        protected getInsertPermission() { return CentroEducativoRow.insertPermission; }
        protected getLocalTextPrefix() { return CentroEducativoRow.localTextPrefix; }
        protected getService() { return CentroEducativoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}