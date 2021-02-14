
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class TareaGrid extends Serenity.EntityGrid<TareaRow, any> {
        protected getColumnsKey() { return 'PortalEducativo.Tarea'; }
        protected getDialogType() { return TareaDialog; }
        protected getIdProperty() { return TareaRow.idProperty; }
        protected getInsertPermission() { return TareaRow.insertPermission; }
        protected getLocalTextPrefix() { return TareaRow.localTextPrefix; }
        protected getService() { return TareaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}