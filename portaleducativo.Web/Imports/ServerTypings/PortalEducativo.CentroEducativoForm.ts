namespace portaleducativo.PortalEducativo {
    export interface CentroEducativoForm {
        Nombre: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Correo: Serenity.StringEditor;
        Tipo: Serenity.StringEditor;
        Director: Serenity.StringEditor;
    }

    export class CentroEducativoForm extends Serenity.PrefixedContext {
        static formKey = 'PortalEducativo.CentroEducativo';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CentroEducativoForm.init)  {
                CentroEducativoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CentroEducativoForm, [
                    'Nombre', w0,
                    'Direccion', w0,
                    'Telefono', w0,
                    'Correo', w0,
                    'Tipo', w0,
                    'Director', w0
                ]);
            }
        }
    }
}
