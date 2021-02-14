namespace portaleducativo.PortalEducativo {
    export interface DocenteForm {
        Nombre: Serenity.StringEditor;
        Apellido: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        FechaNacimeinto: Serenity.DateEditor;
        GradoAcademico: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Foto: Serenity.StringEditor;
        Sexo: Serenity.StringEditor;
        IdUsuarioDocente: Serenity.IntegerEditor;
        IdRolDocente: Serenity.IntegerEditor;
        IdCentroEducativoDocente: Serenity.IntegerEditor;
    }

    export class DocenteForm extends Serenity.PrefixedContext {
        static formKey = 'PortalEducativo.Docente';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocenteForm.init)  {
                DocenteForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(DocenteForm, [
                    'Nombre', w0,
                    'Apellido', w0,
                    'Telefono', w0,
                    'FechaNacimeinto', w1,
                    'GradoAcademico', w0,
                    'Direccion', w0,
                    'Foto', w0,
                    'Sexo', w0,
                    'IdUsuarioDocente', w2,
                    'IdRolDocente', w2,
                    'IdCentroEducativoDocente', w2
                ]);
            }
        }
    }
}
