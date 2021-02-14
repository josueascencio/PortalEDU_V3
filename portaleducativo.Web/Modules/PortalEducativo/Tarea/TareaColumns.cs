using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Columns
{
    [ColumnsScript("PortalEducativo.Tarea")]
    [BasedOnRow(typeof(Entities.TareaRow), CheckNames = true)]
    public class TareaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdTarea { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaFinalizacion { get; set; }
        public byte[] DocumentoMaestro { get; set; }
        public byte[] DocumentoAlumno { get; set; }
        public Int32 Puntuacion { get; set; }
        public String Comentario { get; set; }
        public String IdAlumnoTareaCarnet { get; set; }
    }
}