
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class DocenteGrid extends Serenity.EntityGrid<DocenteRow, any> {
        protected getColumnsKey() { return 'PortalEducativo.Docente'; }
        protected getDialogType() { return DocenteDialog; }
        protected getIdProperty() { return DocenteRow.idProperty; }
        protected getInsertPermission() { return DocenteRow.insertPermission; }
        protected getLocalTextPrefix() { return DocenteRow.localTextPrefix; }
        protected getService() { return DocenteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}