namespace portaleducativo.PortalEducativo {
    export interface AulaForm {
        Nombre: Serenity.StringEditor;
        Seccion: Serenity.StringEditor;
        IdAlumnoAula: Serenity.IntegerEditor;
        IdDocenteAula: Serenity.IntegerEditor;
        IdCursoAula: Serenity.IntegerEditor;
    }

    export class AulaForm extends Serenity.PrefixedContext {
        static formKey = 'PortalEducativo.Aula';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AulaForm.init)  {
                AulaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(AulaForm, [
                    'Nombre', w0,
                    'Seccion', w0,
                    'IdAlumnoAula', w1,
                    'IdDocenteAula', w1,
                    'IdCursoAula', w1
                ]);
            }
        }
    }
}
