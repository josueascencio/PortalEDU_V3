namespace portaleducativo.PortalEducativo {
    export interface CursoForm {
        Nombre: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        FechaInicio: Serenity.DateEditor;
        FechaFin: Serenity.DateEditor;
        Estado: Serenity.StringEditor;
        Aviso: Serenity.StringEditor;
        Imagen: Serenity.StringEditor;
        IdAlumnoCurso: Serenity.IntegerEditor;
        IdDocenteCurso: Serenity.IntegerEditor;
    }

    export class CursoForm extends Serenity.PrefixedContext {
        static formKey = 'PortalEducativo.Curso';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CursoForm.init)  {
                CursoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(CursoForm, [
                    'Nombre', w0,
                    'Descripcion', w0,
                    'FechaInicio', w1,
                    'FechaFin', w1,
                    'Estado', w0,
                    'Aviso', w0,
                    'Imagen', w0,
                    'IdAlumnoCurso', w2,
                    'IdDocenteCurso', w2
                ]);
            }
        }
    }
}
