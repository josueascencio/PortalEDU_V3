
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class DocenteDialog extends Serenity.EntityDialog<DocenteRow, any> {
        protected getFormKey() { return DocenteForm.formKey; }
        protected getIdProperty() { return DocenteRow.idProperty; }
        protected getLocalTextPrefix() { return DocenteRow.localTextPrefix; }
        protected getNameProperty() { return DocenteRow.nameProperty; }
        protected getService() { return DocenteService.baseUrl; }
        protected getDeletePermission() { return DocenteRow.deletePermission; }
        protected getInsertPermission() { return DocenteRow.insertPermission; }
        protected getUpdatePermission() { return DocenteRow.updatePermission; }

        protected form = new DocenteForm(this.idPrefix);

    }
}