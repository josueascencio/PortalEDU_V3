using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace portaleducativo.PortalEducativo.Entities
{
    [ConnectionKey("Default"), Module("PortalEducativo"), TableName("[dbo].[Centro_Educativo]")]
    [DisplayName("Centro Educativo"), InstanceName("Centro Educativo")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CentroEducativoRow : Row<CentroEducativoRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Centro Educativo"), Column("Id_Centro_Educativo"), Identity, IdProperty]
        public Int32? IdCentroEducativo
        {
            get => fields.IdCentroEducativo[this];
            set => fields.IdCentroEducativo[this] = value;
        }

        [DisplayName("Nombre"), Size(50), QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Direccion"), Size(100)]
        public String Direccion
        {
            get => fields.Direccion[this];
            set => fields.Direccion[this] = value;
        }

        [DisplayName("Telefono"), Size(50)]
        public String Telefono
        {
            get => fields.Telefono[this];
            set => fields.Telefono[this] = value;
        }

        [DisplayName("Correo"), Size(50)]
        public String Correo
        {
            get => fields.Correo[this];
            set => fields.Correo[this] = value;
        }

        [DisplayName("Tipo"), Size(50)]
        public String Tipo
        {
            get => fields.Tipo[this];
            set => fields.Tipo[this] = value;
        }

        [DisplayName("Director"), Size(50)]
        public String Director
        {
            get => fields.Director[this];
            set => fields.Director[this] = value;
        }

        public CentroEducativoRow()
            : base()
        {
        }

        public CentroEducativoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdCentroEducativo;
            public StringField Nombre;
            public StringField Direccion;
            public StringField Telefono;
            public StringField Correo;
            public StringField Tipo;
            public StringField Director;
        }
    }
}
