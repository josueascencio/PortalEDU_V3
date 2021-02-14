using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace portaleducativo.PortalEducativo.Entities
{
    [ConnectionKey("Default"), Module("PortalEducativo"), TableName("[dbo].[Alumno]")]
    [DisplayName("Alumno"), InstanceName("Alumno")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AlumnoRow : Row<AlumnoRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Alumno"), Column("Id_Alumno"), Identity, IdProperty]
        public Int32? IdAlumno
        {
            get => fields.IdAlumno[this];
            set => fields.IdAlumno[this] = value;
        }

        [DisplayName("Carnet"), Size(50), QuickSearch, NameProperty]
        public String Carnet
        {
            get => fields.Carnet[this];
            set => fields.Carnet[this] = value;
        }

        [DisplayName("Nombre"), Size(50)]
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

        [DisplayName("Fecha Nacimiento"), Column("Fecha_Nacimiento")]
        public DateTime? FechaNacimiento
        {
            get => fields.FechaNacimiento[this];
            set => fields.FechaNacimiento[this] = value;
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

        [DisplayName("Id Usuario Alumno"), Column("Id_Usuario_Alumno"), NotNull, ForeignKey("[dbo].[Usuario_Sesion]", "Id_Usuario"), LeftJoin("jIdUsuarioAlumno"), TextualField("IdUsuarioAlumnoNombre")]
        public Int32? IdUsuarioAlumno
        {
            get => fields.IdUsuarioAlumno[this];
            set => fields.IdUsuarioAlumno[this] = value;
        }

        [DisplayName("Id Rol Alumno"), Column("Id_Rol_Alumno"), NotNull, ForeignKey("[dbo].[Rol]", "Id_Rol"), LeftJoin("jIdRolAlumno"), TextualField("IdRolAlumnoNombre")]
        public Int32? IdRolAlumno
        {
            get => fields.IdRolAlumno[this];
            set => fields.IdRolAlumno[this] = value;
        }

        [DisplayName("Id Usuario Alumno Nombre"), Expression("jIdUsuarioAlumno.[Nombre]")]
        public String IdUsuarioAlumnoNombre
        {
            get => fields.IdUsuarioAlumnoNombre[this];
            set => fields.IdUsuarioAlumnoNombre[this] = value;
        }

        [DisplayName("Id Usuario Alumno Correo"), Expression("jIdUsuarioAlumno.[Correo]")]
        public String IdUsuarioAlumnoCorreo
        {
            get => fields.IdUsuarioAlumnoCorreo[this];
            set => fields.IdUsuarioAlumnoCorreo[this] = value;
        }

        [DisplayName("Id Rol Alumno Nombre"), Expression("jIdRolAlumno.[Nombre]")]
        public String IdRolAlumnoNombre
        {
            get => fields.IdRolAlumnoNombre[this];
            set => fields.IdRolAlumnoNombre[this] = value;
        }

        [DisplayName("Id Rol Alumno Descripcion"), Expression("jIdRolAlumno.[Descripcion]")]
        public String IdRolAlumnoDescripcion
        {
            get => fields.IdRolAlumnoDescripcion[this];
            set => fields.IdRolAlumnoDescripcion[this] = value;
        }

        public AlumnoRow()
            : base()
        {
        }

        public AlumnoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAlumno;
            public StringField Carnet;
            public StringField Nombre;
            public StringField Apellido;
            public DateTimeField FechaNacimiento;
            public StringField Direccion;
            public StreamField Foto;
            public StringField Sexo;
            public Int32Field IdUsuarioAlumno;
            public Int32Field IdRolAlumno;

            public StringField IdUsuarioAlumnoNombre;
            public StringField IdUsuarioAlumnoCorreo;

            public StringField IdRolAlumnoNombre;
            public StringField IdRolAlumnoDescripcion;
        }
    }
}
