using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Columns
{
    [ColumnsScript("PortalEducativo.AlumnoCurso")]
    [BasedOnRow(typeof(Entities.AlumnoCursoRow), CheckNames = true)]
    public class AlumnoCursoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String IdAlumnoCursoCarnet { get; set; }
        public String IdCursoAlumnoNombre { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
    }
}