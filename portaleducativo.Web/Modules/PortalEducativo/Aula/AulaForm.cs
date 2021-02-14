using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Forms
{
    [FormScript("PortalEducativo.Aula")]
    [BasedOnRow(typeof(Entities.AulaRow), CheckNames = true)]
    public class AulaForm
    {
        public String Nombre { get; set; }
        public String Seccion { get; set; }
        public Int32 IdAlumnoAula { get; set; }
        public Int32 IdDocenteAula { get; set; }
        public Int32 IdCursoAula { get; set; }
    }
}