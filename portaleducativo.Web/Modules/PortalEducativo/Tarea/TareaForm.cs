using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Forms
{
    [FormScript("PortalEducativo.Tarea")]
    [BasedOnRow(typeof(Entities.TareaRow), CheckNames = true)]
    public class TareaForm
    {
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaFinalizacion { get; set; }
        public byte[] SubirDocumentoMaestro { get; set; }
        public byte[] SubirDocumentoAlumno { get; set; }
        public Int32 Puntuacion { get; set; }
        public String Comentario { get; set; }
        public Int32 IdAlumnoTarea { get; set; }
    }
}