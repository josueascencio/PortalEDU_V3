using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Columns
{
    [ColumnsScript("PortalEducativo.Alumno")]
    [BasedOnRow(typeof(Entities.AlumnoRow), CheckNames = true)]
    public class AlumnoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdAlumno { get; set; }
        [EditLink]
        public String Carnet { get; set; }
        public String Nombre { get; set; }
        public String Apellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public String Direccion { get; set; }
        public Stream Foto { get; set; }
        public String Sexo { get; set; }
        public String IdUsuarioAlumnoNombre { get; set; }
        public String IdRolAlumnoNombre { get; set; }
    }
}