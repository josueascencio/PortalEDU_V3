using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Forms
{
    [FormScript("PortalEducativo.Curso")]
    [BasedOnRow(typeof(Entities.CursoRow), CheckNames = true)]
    public class CursoForm
    {
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public String Estado { get; set; }
        public String Aviso { get; set; }
        public Stream Imagen { get; set; }
        public Int32 IdAlumnoCurso { get; set; }
        public Int32 IdDocenteCurso { get; set; }
    }
}