using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Columns
{
    [ColumnsScript("PortalEducativo.Docente")]
    [BasedOnRow(typeof(Entities.DocenteRow), CheckNames = true)]
    public class DocenteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdDocente { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Apellido { get; set; }
        public String Telefono { get; set; }
        public DateTime FechaNacimeinto { get; set; }
        public String GradoAcademico { get; set; }
        public String Direccion { get; set; }
        public Stream Foto { get; set; }
        public String Sexo { get; set; }
        public String IdUsuarioDocenteNombre { get; set; }
        public String IdRolDocenteNombre { get; set; }
        public String IdCentroEducativoDocenteNombre { get; set; }
    }
}