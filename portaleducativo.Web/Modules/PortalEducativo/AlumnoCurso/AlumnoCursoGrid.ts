
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class AlumnoCursoGrid extends Serenity.EntityGrid<AlumnoCursoRow, any> {
        protected getColumnsKey() { return 'PortalEducativo.AlumnoCurso'; }
        protected getDialogType() { return AlumnoCursoDialog; }
        protected getIdProperty() { return AlumnoCursoRow.idProperty; }
        protected getInsertPermission() { return AlumnoCursoRow.insertPermission; }
        protected getLocalTextPrefix() { return AlumnoCursoRow.localTextPrefix; }
        protected getService() { return AlumnoCursoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}