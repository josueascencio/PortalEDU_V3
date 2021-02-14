using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Forms
{
    [FormScript("PortalEducativo.Alumno")]
    [BasedOnRow(typeof(Entities.AlumnoRow), CheckNames = true)]
    public class AlumnoForm
    {
        public String Carnet { get; set; }
        public String Nombre { get; set; }
        public String Apellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public String Direccion { get; set; }
        public Stream Foto { get; set; }
        public String Sexo { get; set; }
        public Int32 IdUsuarioAlumno { get; set; }
        public Int32 IdRolAlumno { get; set; }
    }
}