using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace portaleducativo.PortalEducativo.Entities
{
    [ConnectionKey("Default"), Module("PortalEducativo"), TableName("[dbo].[Tarea]")]
    [DisplayName("Tarea"), InstanceName("Tarea")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TareaRow : Row<TareaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Tarea"), Column("Id_Tarea"), Identity, IdProperty]
        public Int32? IdTarea
        {
            get => fields.IdTarea[this];
            set => fields.IdTarea[this] = value;
        }

        [DisplayName("Nombre"), Size(50), QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Descripcion"), Size(200)]
        public String Descripcion
        {
            get => fields.Descripcion[this];
            set => fields.Descripcion[this] = value;
        }

        [DisplayName("Fecha Creacion"), Column("Fecha_Creacion")]
        public DateTime? FechaCreacion
        {
            get => fields.FechaCreacion[this];
            set => fields.FechaCreacion[this] = value;
        }

        [DisplayName("Fecha Finalizacion"), Column("Fecha_Finalizacion")]
        public DateTime? FechaFinalizacion
        {
            get => fields.FechaFinalizacion[this];
            set => fields.FechaFinalizacion[this] = value;
        }

        [DisplayName("Documento Maestro"), Column("Documento_Maestro"), Size(50)]
        public byte[] DocumentoMaestro
        {
            get => fields.DocumentoMaestro[this];
            set => fields.DocumentoMaestro[this] = value;
        }

        [DisplayName("Documento Alumno"), Column("Documento_Alumno"), Size(50)]
        public byte[] DocumentoAlumno
        {
            get => fields.DocumentoAlumno[this];
            set => fields.DocumentoAlumno[this] = value;
        }

        [DisplayName("Puntuacion")]
        public Int32? Puntuacion
        {
            get => fields.Puntuacion[this];
            set => fields.Puntuacion[this] = value;
        }

        [DisplayName("Comentario"), Size(200)]
        public String Comentario
        {
            get => fields.Comentario[this];
            set => fields.Comentario[this] = value;
        }

        [DisplayName("Id Alumno Tarea"), Column("Id_Alumno_Tarea"), ForeignKey("[dbo].[Alumno]", "Id_Alumno"), LeftJoin("jIdAlumnoTarea"), TextualField("IdAlumnoTareaCarnet")]
        public Int32? IdAlumnoTarea
        {
            get => fields.IdAlumnoTarea[this];
            set => fields.IdAlumnoTarea[this] = value;
        }

        [DisplayName("Id Alumno Tarea Carnet"), Expression("jIdAlumnoTarea.[Carnet]")]
        public String IdAlumnoTareaCarnet
        {
            get => fields.IdAlumnoTareaCarnet[this];
            set => fields.IdAlumnoTareaCarnet[this] = value;
        }

        [DisplayName("Id Alumno Tarea Nombre"), Expression("jIdAlumnoTarea.[Nombre]")]
        public String IdAlumnoTareaNombre
        {
            get => fields.IdAlumnoTareaNombre[this];
            set => fields.IdAlumnoTareaNombre[this] = value;
        }

        [DisplayName("Id Alumno Tarea Apellido"), Expression("jIdAlumnoTarea.[Apellido]")]
        public String IdAlumnoTareaApellido
        {
            get => fields.IdAlumnoTareaApellido[this];
            set => fields.IdAlumnoTareaApellido[this] = value;
        }

        [DisplayName("Id Alumno Tarea Fecha Nacimiento"), Expression("jIdAlumnoTarea.[Fecha_Nacimiento]")]
        public DateTime? IdAlumnoTareaFechaNacimiento
        {
            get => fields.IdAlumnoTareaFechaNacimiento[this];
            set => fields.IdAlumnoTareaFechaNacimiento[this] = value;
        }

        [DisplayName("Id Alumno Tarea Direccion"), Expression("jIdAlumnoTarea.[Direccion]")]
        public String IdAlumnoTareaDireccion
        {
            get => fields.IdAlumnoTareaDireccion[this];
            set => fields.IdAlumnoTareaDireccion[this] = value;
        }

        [DisplayName("Id Alumno Tarea Foto"), Expression("jIdAlumnoTarea.[Foto]")]
        public Stream IdAlumnoTareaFoto
        {
            get => fields.IdAlumnoTareaFoto[this];
            set => fields.IdAlumnoTareaFoto[this] = value;
        }

        [DisplayName("Id Alumno Tarea Sexo"), Expression("jIdAlumnoTarea.[Sexo]")]
        public String IdAlumnoTareaSexo
        {
            get => fields.IdAlumnoTareaSexo[this];
            set => fields.IdAlumnoTareaSexo[this] = value;
        }

        [DisplayName("Id Alumno Tarea Id Usuario Alumno"), Expression("jIdAlumnoTarea.[Id_Usuario_Alumno]")]
        public Int32? IdAlumnoTareaIdUsuarioAlumno
        {
            get => fields.IdAlumnoTareaIdUsuarioAlumno[this];
            set => fields.IdAlumnoTareaIdUsuarioAlumno[this] = value;
        }

        [DisplayName("Id Alumno Tarea Id Rol Alumno"), Expression("jIdAlumnoTarea.[Id_Rol_Alumno]")]
        public Int32? IdAlumnoTareaIdRolAlumno
        {
            get => fields.IdAlumnoTareaIdRolAlumno[this];
            set => fields.IdAlumnoTareaIdRolAlumno[this] = value;
        }

        public TareaRow()
            : base()
        {
        }

        public TareaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTarea;
            public StringField Nombre;
            public StringField Descripcion;
            public DateTimeField FechaCreacion;
            public DateTimeField FechaFinalizacion;
            public ByteArrayField DocumentoMaestro;
            public ByteArrayField DocumentoAlumno;
            public Int32Field Puntuacion;
            public StringField Comentario;
            public Int32Field IdAlumnoTarea;

            public StringField IdAlumnoTareaCarnet;
            public StringField IdAlumnoTareaNombre;
            public StringField IdAlumnoTareaApellido;
            public DateTimeField IdAlumnoTareaFechaNacimiento;
            public StringField IdAlumnoTareaDireccion;
            public StreamField IdAlumnoTareaFoto;
            public StringField IdAlumnoTareaSexo;
            public Int32Field IdAlumnoTareaIdUsuarioAlumno;
            public Int32Field IdAlumnoTareaIdRolAlumno;
        }
    }
}
