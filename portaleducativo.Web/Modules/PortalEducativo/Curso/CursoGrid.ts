
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class CursoGrid extends Serenity.EntityGrid<CursoRow, any> {
        protected getColumnsKey() { return 'PortalEducativo.Curso'; }
        protected getDialogType() { return CursoDialog; }
        protected getIdProperty() { return CursoRow.idProperty; }
        protected getInsertPermission() { return CursoRow.insertPermission; }
        protected getLocalTextPrefix() { return CursoRow.localTextPrefix; }
        protected getService() { return CursoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}