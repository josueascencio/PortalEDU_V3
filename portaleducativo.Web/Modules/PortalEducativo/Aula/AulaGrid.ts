
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class AulaGrid extends Serenity.EntityGrid<AulaRow, any> {
        protected getColumnsKey() { return 'PortalEducativo.Aula'; }
        protected getDialogType() { return AulaDialog; }
        protected getIdProperty() { return AulaRow.idProperty; }
        protected getInsertPermission() { return AulaRow.insertPermission; }
        protected getLocalTextPrefix() { return AulaRow.localTextPrefix; }
        protected getService() { return AulaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}