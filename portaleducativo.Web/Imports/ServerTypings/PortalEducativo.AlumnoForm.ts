namespace portaleducativo.PortalEducativo {
    export interface AlumnoForm {
        Carnet: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        Apellido: Serenity.StringEditor;
        FechaNacimiento: Serenity.DateEditor;
        Direccion: Serenity.StringEditor;
        Foto: Serenity.StringEditor;
        Sexo: Serenity.StringEditor;
        IdUsuarioAlumno: Serenity.IntegerEditor;
        IdRolAlumno: Serenity.IntegerEditor;
    }

    export class AlumnoForm extends Serenity.PrefixedContext {
        static formKey = 'PortalEducativo.Alumno';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AlumnoForm.init)  {
                AlumnoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(AlumnoForm, [
                    'Carnet', w0,
                    'Nombre', w0,
                    'Apellido', w0,
                    'FechaNacimiento', w1,
                    'Direccion', w0,
                    'Foto', w0,
                    'Sexo', w0,
                    'IdUsuarioAlumno', w2,
                    'IdRolAlumno', w2
                ]);
            }
        }
    }
}
