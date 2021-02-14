using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Columns
{
    [ColumnsScript("PortalEducativo.Curso")]
    [BasedOnRow(typeof(Entities.CursoRow), CheckNames = true)]
    public class CursoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdCurso { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
        public String Estado { get; set; }
        public String Aviso { get; set; }
        public Stream Imagen { get; set; }
        public String IdAlumnoCursoCarnet { get; set; }
        public String IdDocenteCursoNombre { get; set; }
    }
}