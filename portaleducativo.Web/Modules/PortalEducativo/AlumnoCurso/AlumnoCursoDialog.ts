
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class AlumnoCursoDialog extends Serenity.EntityDialog<AlumnoCursoRow, any> {
        protected getFormKey() { return AlumnoCursoForm.formKey; }
        protected getIdProperty() { return AlumnoCursoRow.idProperty; }
        protected getLocalTextPrefix() { return AlumnoCursoRow.localTextPrefix; }
        protected getService() { return AlumnoCursoService.baseUrl; }
        protected getDeletePermission() { return AlumnoCursoRow.deletePermission; }
        protected getInsertPermission() { return AlumnoCursoRow.insertPermission; }
        protected getUpdatePermission() { return AlumnoCursoRow.updatePermission; }

        protected form = new AlumnoCursoForm(this.idPrefix);

    }
}