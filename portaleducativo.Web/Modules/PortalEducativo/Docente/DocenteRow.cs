using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace portaleducativo.PortalEducativo.Entities
{
    [ConnectionKey("Default"), Module("PortalEducativo"), TableName("[dbo].[Docente]")]
    [DisplayName("Docente"), InstanceName("Docente")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class DocenteRow : Row<DocenteRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Docente"), Column("Id_Docente"), Identity, IdProperty]
        public Int32? IdDocente
        {
            get => fields.IdDocente[this];
            set => fields.IdDocente[this] = value;
        }

        [DisplayName("Nombre"), Size(50), QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Apellido"), Size(50)]
        public String Apellido
        {
            get => fields.Apellido[this];
            set => fields.Apellido[this] = value;
        }

        [DisplayName("Telefono"), Size(50)]
        public String Telefono
        {
            get => fields.Telefono[this];
            set => fields.Telefono[this] = value;
        }

        [DisplayName("Fecha Nacimeinto"), Column("Fecha_Nacimeinto")]
        public DateTime? FechaNacimeinto
        {
            get => fields.FechaNacimeinto[this];
            set => fields.FechaNacimeinto[this] = value;
        }

        [DisplayName("Grado Academico"), Column("Grado_Academico"), Size(50)]
        public String GradoAcademico
        {
            get => fields.GradoAcademico[this];
            set => fields.GradoAcademico[this] = value;
        }

        [DisplayName("Direccion"), Size(50)]
        public String Direccion
        {
            get => fields.Direccion[this];
            set => fields.Direccion[this] = value;
        }

        [DisplayName("Foto"), Size(2147483647)]
        public Stream Foto
        {
            get => fields.Foto[this];
            set => fields.Foto[this] = value;
        }

        [DisplayName("Sexo"), Size(10)]
        public String Sexo
        {
            get => fields.Sexo[this];
            set => fields.Sexo[this] = value;
        }

        [DisplayName("Id Usuario Docente"), Column("Id_Usuario_Docente"), ForeignKey("[dbo].[Usuario_Sesion]", "Id_Usuario"), LeftJoin("jIdUsuarioDocente"), TextualField("IdUsuarioDocenteNombre")]
        public Int32? IdUsuarioDocente
        {
            get => fields.IdUsuarioDocente[this];
            set => fields.IdUsuarioDocente[this] = value;
        }

        [DisplayName("Id Rol Docente"), Column("Id_Rol_Docente"), ForeignKey("[dbo].[Rol]", "Id_Rol"), LeftJoin("jIdRolDocente"), TextualField("IdRolDocenteNombre")]
        public Int32? IdRolDocente
        {
            get => fields.IdRolDocente[this];
            set => fields.IdRolDocente[this] = value;
        }

        [DisplayName("Id Centro Educativo Docente"), Column("Id_Centro_Educativo_Docente"), NotNull, ForeignKey("[dbo].[Centro_Educativo]", "Id_Centro_Educativo"), LeftJoin("jIdCentroEducativoDocente"), TextualField("IdCentroEducativoDocenteNombre")]
        public Int32? IdCentroEducativoDocente
        {
            get => fields.IdCentroEducativoDocente[this];
            set => fields.IdCentroEducativoDocente[this] = value;
        }

        [DisplayName("Id Usuario Docente Nombre"), Expression("jIdUsuarioDocente.[Nombre]")]
        public String IdUsuarioDocenteNombre
        {
            get => fields.IdUsuarioDocenteNombre[this];
            set => fields.IdUsuarioDocenteNombre[this] = value;
        }

        [DisplayName("Id Usuario Docente Correo"), Expression("jIdUsuarioDocente.[Correo]")]
        public String IdUsuarioDocenteCorreo
        {
            get => fields.IdUsuarioDocenteCorreo[this];
            set => fields.IdUsuarioDocenteCorreo[this] = value;
        }

        [DisplayName("Id Rol Docente Nombre"), Expression("jIdRolDocente.[Nombre]")]
        public String IdRolDocenteNombre
        {
            get => fields.IdRolDocenteNombre[this];
            set => fields.IdRolDocenteNombre[this] = value;
        }

        [DisplayName("Id Rol Docente Descripcion"), Expression("jIdRolDocente.[Descripcion]")]
        public String IdRolDocenteDescripcion
        {
            get => fields.IdRolDocenteDescripcion[this];
            set => fields.IdRolDocenteDescripcion[this] = value;
        }

        [DisplayName("Id Centro Educativo Docente Nombre"), Expression("jIdCentroEducativoDocente.[Nombre]")]
        public String IdCentroEducativoDocenteNombre
        {
            get => fields.IdCentroEducativoDocenteNombre[this];
            set => fields.IdCentroEducativoDocenteNombre[this] = value;
        }

        [DisplayName("Id Centro Educativo Docente Direccion"), Expression("jIdCentroEducativoDocente.[Direccion]")]
        public String IdCentroEducativoDocenteDireccion
        {
            get => fields.IdCentroEducativoDocenteDireccion[this];
            set => fields.IdCentroEducativoDocenteDireccion[this] = value;
        }

        [DisplayName("Id Centro Educativo Docente Telefono"), Expression("jIdCentroEducativoDocente.[Telefono]")]
        public String IdCentroEducativoDocenteTelefono
        {
            get => fields.IdCentroEducativoDocenteTelefono[this];
            set => fields.IdCentroEducativoDocenteTelefono[this] = value;
        }

        [DisplayName("Id Centro Educativo Docente Correo"), Expression("jIdCentroEducativoDocente.[Correo]")]
        public String IdCentroEducativoDocenteCorreo
        {
            get => fields.IdCentroEducativoDocenteCorreo[this];
            set => fields.IdCentroEducativoDocenteCorreo[this] = value;
        }

        [DisplayName("Id Centro Educativo Docente Tipo"), Expression("jIdCentroEducativoDocente.[Tipo]")]
        public String IdCentroEducativoDocenteTipo
        {
            get => fields.IdCentroEducativoDocenteTipo[this];
            set => fields.IdCentroEducativoDocenteTipo[this] = value;
        }

        [DisplayName("Id Centro Educativo Docente Director"), Expression("jIdCentroEducativoDocente.[Director]")]
        public String IdCentroEducativoDocenteDirector
        {
            get => fields.IdCentroEducativoDocenteDirector[this];
            set => fields.IdCentroEducativoDocenteDirector[this] = value;
        }

        public DocenteRow()
            : base()
        {
        }

        public DocenteRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdDocente;
            public StringField Nombre;
            public StringField Apellido;
            public StringField Telefono;
            public DateTimeField FechaNacimeinto;
            public StringField GradoAcademico;
            public StringField Direccion;
            public StreamField Foto;
            public StringField Sexo;
            public Int32Field IdUsuarioDocente;
            public Int32Field IdRolDocente;
            public Int32Field IdCentroEducativoDocente;

            public StringField IdUsuarioDocenteNombre;
            public StringField IdUsuarioDocenteCorreo;

            public StringField IdRolDocenteNombre;
            public StringField IdRolDocenteDescripcion;

            public StringField IdCentroEducativoDocenteNombre;
            public StringField IdCentroEducativoDocenteDireccion;
            public StringField IdCentroEducativoDocenteTelefono;
            public StringField IdCentroEducativoDocenteCorreo;
            public StringField IdCentroEducativoDocenteTipo;
            public StringField IdCentroEducativoDocenteDirector;
        }
    }
}
