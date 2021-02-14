using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Columns
{
    [ColumnsScript("PortalEducativo.Aula")]
    [BasedOnRow(typeof(Entities.AulaRow), CheckNames = true)]
    public class AulaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdAula { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Seccion { get; set; }
        public String IdAlumnoAulaCarnet { get; set; }
        public String IdDocenteAulaNombre { get; set; }
        public String IdCursoAulaNombre { get; set; }
    }
}