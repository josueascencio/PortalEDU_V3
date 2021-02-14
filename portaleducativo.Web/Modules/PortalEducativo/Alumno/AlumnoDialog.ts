
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class AlumnoDialog extends Serenity.EntityDialog<AlumnoRow, any> {
        protected getFormKey() { return AlumnoForm.formKey; }
        protected getIdProperty() { return AlumnoRow.idProperty; }
        protected getLocalTextPrefix() { return AlumnoRow.localTextPrefix; }
        protected getNameProperty() { return AlumnoRow.nameProperty; }
        protected getService() { return AlumnoService.baseUrl; }
        protected getDeletePermission() { return AlumnoRow.deletePermission; }
        protected getInsertPermission() { return AlumnoRow.insertPermission; }
        protected getUpdatePermission() { return AlumnoRow.updatePermission; }

        protected form = new AlumnoForm(this.idPrefix);

    }
}