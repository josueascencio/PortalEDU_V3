namespace portaleducativo.PortalEducativo {
    export interface AlumnoCursoForm {
        IdCursoAlumno: Serenity.IntegerEditor;
        FechaInicio: Serenity.DateEditor;
        FechaFin: Serenity.DateEditor;
    }

    export class AlumnoCursoForm extends Serenity.PrefixedContext {
        static formKey = 'PortalEducativo.AlumnoCurso';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AlumnoCursoForm.init)  {
                AlumnoCursoForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DateEditor;

                Q.initFormType(AlumnoCursoForm, [
                    'IdCursoAlumno', w0,
                    'FechaInicio', w1,
                    'FechaFin', w1
                ]);
            }
        }
    }
}
