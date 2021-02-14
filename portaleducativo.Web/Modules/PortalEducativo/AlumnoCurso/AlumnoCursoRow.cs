using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace portaleducativo.PortalEducativo.Entities
{
    [ConnectionKey("Default"), Module("PortalEducativo"), TableName("[dbo].[Alumno_Curso]")]
    [DisplayName("Alumno Curso"), InstanceName("Alumno Curso")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AlumnoCursoRow : Row<AlumnoCursoRow.RowFields>, IIdRow
    {
        [DisplayName("Id Alumno Curso"), Column("Id_Alumno_Curso"), PrimaryKey, ForeignKey("[dbo].[Alumno]", "Id_Alumno"), LeftJoin("jIdAlumnoCurso"), IdProperty, TextualField("IdAlumnoCursoCarnet")]
        public Int32? IdAlumnoCurso
        {
            get => fields.IdAlumnoCurso[this];
            set => fields.IdAlumnoCurso[this] = value;
        }

        [DisplayName("Id Curso Alumno"), Column("Id_Curso_Alumno"), PrimaryKey, ForeignKey("[dbo].[Curso]", "Id_Curso"), LeftJoin("jIdCursoAlumno"), TextualField("IdCursoAlumnoNombre")]
        public Int32? IdCursoAlumno
        {
            get => fields.IdCursoAlumno[this];
            set => fields.IdCursoAlumno[this] = value;
        }

        [DisplayName("Fecha Inicio"), Column("Fecha_Inicio")]
        public DateTime? FechaInicio
        {
            get => fields.FechaInicio[this];
            set => fields.FechaInicio[this] = value;
        }

        [DisplayName("Fecha Fin"), Column("Fecha_Fin")]
        public DateTime? FechaFin
        {
            get => fields.FechaFin[this];
            set => fields.FechaFin[this] = value;
        }

        [DisplayName("Id Alumno Curso Carnet"), Expression("jIdAlumnoCurso.[Carnet]")]
        public String IdAlumnoCursoCarnet
        {
            get => fields.IdAlumnoCursoCarnet[this];
            set => fields.IdAlumnoCursoCarnet[this] = value;
        }

        [DisplayName("Id Alumno Curso Nombre"), Expression("jIdAlumnoCurso.[Nombre]")]
        public String IdAlumnoCursoNombre
        {
            get => fields.IdAlumnoCursoNombre[this];
            set => fields.IdAlumnoCursoNombre[this] = value;
        }

        [DisplayName("Id Alumno Curso Apellido"), Expression("jIdAlumnoCurso.[Apellido]")]
        public String IdAlumnoCursoApellido
        {
            get => fields.IdAlumnoCursoApellido[this];
            set => fields.IdAlumnoCursoApellido[this] = value;
        }

        [DisplayName("Id Alumno Curso Fecha Nacimiento"), Expression("jIdAlumnoCurso.[Fecha_Nacimiento]")]
        public DateTime? IdAlumnoCursoFechaNacimiento
        {
            get => fields.IdAlumnoCursoFechaNacimiento[this];
            set => fields.IdAlumnoCursoFechaNacimiento[this] = value;
        }

        [DisplayName("Id Alumno Curso Direccion"), Expression("jIdAlumnoCurso.[Direccion]")]
        public String IdAlumnoCursoDireccion
        {
            get => fields.IdAlumnoCursoDireccion[this];
            set => fields.IdAlumnoCursoDireccion[this] = value;
        }

        [DisplayName("Id Alumno Curso Foto"), Expression("jIdAlumnoCurso.[Foto]")]
        public Stream IdAlumnoCursoFoto
        {
            get => fields.IdAlumnoCursoFoto[this];
            set => fields.IdAlumnoCursoFoto[this] = value;
        }

        [DisplayName("Id Alumno Curso Sexo"), Expression("jIdAlumnoCurso.[Sexo]")]
        public String IdAlumnoCursoSexo
        {
            get => fields.IdAlumnoCursoSexo[this];
            set => fields.IdAlumnoCursoSexo[this] = value;
        }

        [DisplayName("Id Alumno Curso Id Usuario Alumno"), Expression("jIdAlumnoCurso.[Id_Usuario_Alumno]")]
        public Int32? IdAlumnoCursoIdUsuarioAlumno
        {
            get => fields.IdAlumnoCursoIdUsuarioAlumno[this];
            set => fields.IdAlumnoCursoIdUsuarioAlumno[this] = value;
        }

        [DisplayName("Id Alumno Curso Id Rol Alumno"), Expression("jIdAlumnoCurso.[Id_Rol_Alumno]")]
        public Int32? IdAlumnoCursoIdRolAlumno
        {
            get => fields.IdAlumnoCursoIdRolAlumno[this];
            set => fields.IdAlumnoCursoIdRolAlumno[this] = value;
        }

        [DisplayName("Id Curso Alumno Nombre"), Expression("jIdCursoAlumno.[Nombre]")]
        public String IdCursoAlumnoNombre
        {
            get => fields.IdCursoAlumnoNombre[this];
            set => fields.IdCursoAlumnoNombre[this] = value;
        }

        [DisplayName("Id Curso Alumno Descripcion"), Expression("jIdCursoAlumno.[Descripcion]")]
        public String IdCursoAlumnoDescripcion
        {
            get => fields.IdCursoAlumnoDescripcion[this];
            set => fields.IdCursoAlumnoDescripcion[this] = value;
        }

        [DisplayName("Id Curso Alumno Fecha Inicio"), Expression("jIdCursoAlumno.[Fecha_Inicio]")]
        public DateTime? IdCursoAlumnoFechaInicio
        {
            get => fields.IdCursoAlumnoFechaInicio[this];
            set => fields.IdCursoAlumnoFechaInicio[this] = value;
        }

        [DisplayName("Id Curso Alumno Fecha Fin"), Expression("jIdCursoAlumno.[Fecha_Fin]")]
        public DateTime? IdCursoAlumnoFechaFin
        {
            get => fields.IdCursoAlumnoFechaFin[this];
            set => fields.IdCursoAlumnoFechaFin[this] = value;
        }

        [DisplayName("Id Curso Alumno Estado"), Expression("jIdCursoAlumno.[Estado]")]
        public String IdCursoAlumnoEstado
        {
            get => fields.IdCursoAlumnoEstado[this];
            set => fields.IdCursoAlumnoEstado[this] = value;
        }

        [DisplayName("Id Curso Alumno Aviso"), Expression("jIdCursoAlumno.[Aviso]")]
        public String IdCursoAlumnoAviso
        {
            get => fields.IdCursoAlumnoAviso[this];
            set => fields.IdCursoAlumnoAviso[this] = value;
        }

        [DisplayName("Id Curso Alumno Imagen"), Expression("jIdCursoAlumno.[Imagen]")]
        public Stream IdCursoAlumnoImagen
        {
            get => fields.IdCursoAlumnoImagen[this];
            set => fields.IdCursoAlumnoImagen[this] = value;
        }

        [DisplayName("Id Curso Alumno Id Alumno Curso"), Expression("jIdCursoAlumno.[Id_Alumno_Curso]")]
        public Int32? IdCursoAlumnoIdAlumnoCurso
        {
            get => fields.IdCursoAlumnoIdAlumnoCurso[this];
            set => fields.IdCursoAlumnoIdAlumnoCurso[this] = value;
        }

        [DisplayName("Id Curso Alumno Id Docente Curso"), Expression("jIdCursoAlumno.[Id_Docente_Curso]")]
        public Int32? IdCursoAlumnoIdDocenteCurso
        {
            get => fields.IdCursoAlumnoIdDocenteCurso[this];
            set => fields.IdCursoAlumnoIdDocenteCurso[this] = value;
        }

        public AlumnoCursoRow()
            : base()
        {
        }

        public AlumnoCursoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAlumnoCurso;
            public Int32Field IdCursoAlumno;
            public DateTimeField FechaInicio;
            public DateTimeField FechaFin;

            public StringField IdAlumnoCursoCarnet;
            public StringField IdAlumnoCursoNombre;
            public StringField IdAlumnoCursoApellido;
            public DateTimeField IdAlumnoCursoFechaNacimiento;
            public StringField IdAlumnoCursoDireccion;
            public StreamField IdAlumnoCursoFoto;
            public StringField IdAlumnoCursoSexo;
            public Int32Field IdAlumnoCursoIdUsuarioAlumno;
            public Int32Field IdAlumnoCursoIdRolAlumno;

            public StringField IdCursoAlumnoNombre;
            public StringField IdCursoAlumnoDescripcion;
            public DateTimeField IdCursoAlumnoFechaInicio;
            public DateTimeField IdCursoAlumnoFechaFin;
            public StringField IdCursoAlumnoEstado;
            public StringField IdCursoAlumnoAviso;
            public StreamField IdCursoAlumnoImagen;
            public Int32Field IdCursoAlumnoIdAlumnoCurso;
            public Int32Field IdCursoAlumnoIdDocenteCurso;
        }
    }
}
