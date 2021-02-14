
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class TareaDialog extends Serenity.EntityDialog<TareaRow, any> {
        protected getFormKey() { return TareaForm.formKey; }
        protected getIdProperty() { return TareaRow.idProperty; }
        protected getLocalTextPrefix() { return TareaRow.localTextPrefix; }
        protected getNameProperty() { return TareaRow.nameProperty; }
        protected getService() { return TareaService.baseUrl; }
        protected getDeletePermission() { return TareaRow.deletePermission; }
        protected getInsertPermission() { return TareaRow.insertPermission; }
        protected getUpdatePermission() { return TareaRow.updatePermission; }

        protected form = new TareaForm(this.idPrefix);

    }
}