namespace portaleducativo.PortalEducativo {
    export interface TareaForm {
        Nombre: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        FechaCreacion: Serenity.DateEditor;
        FechaFinalizacion: Serenity.DateEditor;
        DocumentoMaestro: Serenity.StringEditor;
        DocumentoAlumno: Serenity.StringEditor;
        Puntuacion: Serenity.IntegerEditor;
        Comentario: Serenity.StringEditor;
        IdAlumnoTarea: Serenity.IntegerEditor;
    }

    export class TareaForm extends Serenity.PrefixedContext {
        static formKey = 'PortalEducativo.Tarea';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TareaForm.init)  {
                TareaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(TareaForm, [
                    'Nombre', w0,
                    'Descripcion', w0,
                    'FechaCreacion', w1,
                    'FechaFinalizacion', w1,
                    'DocumentoMaestro', w0,
                    'DocumentoAlumno', w0,
                    'Puntuacion', w2,
                    'Comentario', w0,
                    'IdAlumnoTarea', w2
                ]);
            }
        }
    }
}
