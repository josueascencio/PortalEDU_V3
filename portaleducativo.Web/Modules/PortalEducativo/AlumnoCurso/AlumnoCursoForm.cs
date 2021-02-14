using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Forms
{
    [FormScript("PortalEducativo.AlumnoCurso")]
    [BasedOnRow(typeof(Entities.AlumnoCursoRow), CheckNames = true)]
    public class AlumnoCursoForm
    {
        public Int32 IdCursoAlumno { get; set; }
        public DateTime FechaInicio { get; set; }
        public DateTime FechaFin { get; set; }
    }
}