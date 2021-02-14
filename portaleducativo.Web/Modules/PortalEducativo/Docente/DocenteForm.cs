using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Forms
{
    [FormScript("PortalEducativo.Docente")]
    [BasedOnRow(typeof(Entities.DocenteRow), CheckNames = true)]
    public class DocenteForm
    {
        public String Nombre { get; set; }
        public String Apellido { get; set; }
        public String Telefono { get; set; }
        public DateTime FechaNacimeinto { get; set; }
        public String GradoAcademico { get; set; }
        public String Direccion { get; set; }
        public Stream Foto { get; set; }
        public String Sexo { get; set; }
        public Int32 IdUsuarioDocente { get; set; }
        public Int32 IdRolDocente { get; set; }
        public Int32 IdCentroEducativoDocente { get; set; }
    }
}