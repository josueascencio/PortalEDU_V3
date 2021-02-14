
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class AlumnoGrid extends Serenity.EntityGrid<AlumnoRow, any> {
        protected getColumnsKey() { return 'PortalEducativo.Alumno'; }
        protected getDialogType() { return AlumnoDialog; }
        protected getIdProperty() { return AlumnoRow.idProperty; }
        protected getInsertPermission() { return AlumnoRow.insertPermission; }
        protected getLocalTextPrefix() { return AlumnoRow.localTextPrefix; }
        protected getService() { return AlumnoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}