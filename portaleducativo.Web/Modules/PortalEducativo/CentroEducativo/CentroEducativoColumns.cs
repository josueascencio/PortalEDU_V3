using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace portaleducativo.PortalEducativo.Columns
{
    [ColumnsScript("PortalEducativo.CentroEducativo")]
    [BasedOnRow(typeof(Entities.CentroEducativoRow), CheckNames = true)]
    public class CentroEducativoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdCentroEducativo { get; set; }
        [EditLink]
        public String Nombre { get; set; }
        public String Direccion { get; set; }
        public String Telefono { get; set; }
        public String Correo { get; set; }
        public String Tipo { get; set; }
        public String Director { get; set; }
    }
}