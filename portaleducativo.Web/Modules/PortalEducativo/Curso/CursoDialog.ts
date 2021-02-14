
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class CursoDialog extends Serenity.EntityDialog<CursoRow, any> {
        protected getFormKey() { return CursoForm.formKey; }
        protected getIdProperty() { return CursoRow.idProperty; }
        protected getLocalTextPrefix() { return CursoRow.localTextPrefix; }
        protected getNameProperty() { return CursoRow.nameProperty; }
        protected getService() { return CursoService.baseUrl; }
        protected getDeletePermission() { return CursoRow.deletePermission; }
        protected getInsertPermission() { return CursoRow.insertPermission; }
        protected getUpdatePermission() { return CursoRow.updatePermission; }

        protected form = new CursoForm(this.idPrefix);

    }
}