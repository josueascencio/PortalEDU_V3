
namespace portaleducativo.PortalEducativo {

    @Serenity.Decorators.registerClass()
    export class CentroEducativoDialog extends Serenity.EntityDialog<CentroEducativoRow, any> {
        protected getFormKey() { return CentroEducativoForm.formKey; }
        protected getIdProperty() { return CentroEducativoRow.idProperty; }
        protected getLocalTextPrefix() { return CentroEducativoRow.localTextPrefix; }
        protected getNameProperty() { return CentroEducativoRow.nameProperty; }
        protected getService() { return CentroEducativoService.baseUrl; }
        protected getDeletePermission() { return CentroEducativoRow.deletePermission; }
        protected getInsertPermission() { return CentroEducativoRow.insertPermission; }
        protected getUpdatePermission() { return CentroEducativoRow.updatePermission; }

        protected form = new CentroEducativoForm(this.idPrefix);

    }
}