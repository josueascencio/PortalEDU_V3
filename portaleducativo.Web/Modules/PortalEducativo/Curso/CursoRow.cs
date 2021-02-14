using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace portaleducativo.PortalEducativo.Entities
{
    [ConnectionKey("Default"), Module("PortalEducativo"), TableName("[dbo].[Curso]")]
    [DisplayName("Curso"), InstanceName("Curso")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CursoRow : Row<CursoRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Curso"), Column("Id_Curso"), Identity, IdProperty]
        public Int32? IdCurso
        {
            get => fields.IdCurso[this];
            set => fields.IdCurso[this] = value;
        }

        [DisplayName("Nombre"), Size(50), QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Descripcion"), Size(100)]
        public String Descripcion
        {
            get => fields.Descripcion[this];
            set => fields.Descripcion[this] = value;
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

        [DisplayName("Estado"), Size(50)]
        public String Estado
        {
            get => fields.Estado[this];
            set => fields.Estado[this] = value;
        }

        [DisplayName("Aviso"), Size(50)]
        public String Aviso
        {
            get => fields.Aviso[this];
            set => fields.Aviso[this] = value;
        }

        [DisplayName("Imagen"), Size(2147483647)]
        public Stream Imagen
        {
            get => fields.Imagen[this];
            set => fields.Imagen[this] = value;
        }

        [DisplayName("Id Alumno Curso"), Column("Id_Alumno_Curso"), ForeignKey("[dbo].[Alumno]", "Id_Alumno"), LeftJoin("jIdAlumnoCurso"), TextualField("IdAlumnoCursoCarnet")]
        public Int32? IdAlumnoCurso
        {
            get => fields.IdAlumnoCurso[this];
            set => fields.IdAlumnoCurso[this] = value;
        }

        [DisplayName("Id Docente Curso"), Column("Id_Docente_Curso"), ForeignKey("[dbo].[Docente]", "Id_Docente"), LeftJoin("jIdDocenteCurso"), TextualField("IdDocenteCursoNombre")]
        public Int32? IdDocenteCurso
        {
            get => fields.IdDocenteCurso[this];
            set => fields.IdDocenteCurso[this] = value;
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

        [DisplayName("Id Docente Curso Nombre"), Expression("jIdDocenteCurso.[Nombre]")]
        public String IdDocenteCursoNombre
        {
            get => fields.IdDocenteCursoNombre[this];
            set => fields.IdDocenteCursoNombre[this] = value;
        }

        [DisplayName("Id Docente Curso Apellido"), Expression("jIdDocenteCurso.[Apellido]")]
        public String IdDocenteCursoApellido
        {
            get => fields.IdDocenteCursoApellido[this];
            set => fields.IdDocenteCursoApellido[this] = value;
        }

        [DisplayName("Id Docente Curso Telefono"), Expression("jIdDocenteCurso.[Telefono]")]
        public String IdDocenteCursoTelefono
        {
            get => fields.IdDocenteCursoTelefono[this];
            set => fields.IdDocenteCursoTelefono[this] = value;
        }

        [DisplayName("Id Docente Curso Fecha Nacimeinto"), Expression("jIdDocenteCurso.[Fecha_Nacimeinto]")]
        public DateTime? IdDocenteCursoFechaNacimeinto
        {
            get => fields.IdDocenteCursoFechaNacimeinto[this];
            set => fields.IdDocenteCursoFechaNacimeinto[this] = value;
        }

        [DisplayName("Id Docente Curso Grado Academico"), Expression("jIdDocenteCurso.[Grado_Academico]")]
        public String IdDocenteCursoGradoAcademico
        {
            get => fields.IdDocenteCursoGradoAcademico[this];
            set => fields.IdDocenteCursoGradoAcademico[this] = value;
        }

        [DisplayName("Id Docente Curso Direccion"), Expression("jIdDocenteCurso.[Direccion]")]
        public String IdDocenteCursoDireccion
        {
            get => fields.IdDocenteCursoDireccion[this];
            set => fields.IdDocenteCursoDireccion[this] = value;
        }

        [DisplayName("Id Docente Curso Foto"), Expression("jIdDocenteCurso.[Foto]")]
        public Stream IdDocenteCursoFoto
        {
            get => fields.IdDocenteCursoFoto[this];
            set => fields.IdDocenteCursoFoto[this] = value;
        }

        [DisplayName("Id Docente Curso Sexo"), Expression("jIdDocenteCurso.[Sexo]")]
        public String IdDocenteCursoSexo
        {
            get => fields.IdDocenteCursoSexo[this];
            set => fields.IdDocenteCursoSexo[this] = value;
        }

        [DisplayName("Id Docente Curso Id Usuario Docente"), Expression("jIdDocenteCurso.[Id_Usuario_Docente]")]
        public Int32? IdDocenteCursoIdUsuarioDocente
        {
            get => fields.IdDocenteCursoIdUsuarioDocente[this];
            set => fields.IdDocenteCursoIdUsuarioDocente[this] = value;
        }

        [DisplayName("Id Docente Curso Id Rol Docente"), Expression("jIdDocenteCurso.[Id_Rol_Docente]")]
        public Int32? IdDocenteCursoIdRolDocente
        {
            get => fields.IdDocenteCursoIdRolDocente[this];
            set => fields.IdDocenteCursoIdRolDocente[this] = value;
        }

        [DisplayName("Id Docente Curso Id Centro Educativo Docente"), Expression("jIdDocenteCurso.[Id_Centro_Educativo_Docente]")]
        public Int32? IdDocenteCursoIdCentroEducativoDocente
        {
            get => fields.IdDocenteCursoIdCentroEducativoDocente[this];
            set => fields.IdDocenteCursoIdCentroEducativoDocente[this] = value;
        }

        public CursoRow()
            : base()
        {
        }

        public CursoRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdCurso;
            public StringField Nombre;
            public StringField Descripcion;
            public DateTimeField FechaInicio;
            public DateTimeField FechaFin;
            public StringField Estado;
            public StringField Aviso;
            public StreamField Imagen;
            public Int32Field IdAlumnoCurso;
            public Int32Field IdDocenteCurso;

            public StringField IdAlumnoCursoCarnet;
            public StringField IdAlumnoCursoNombre;
            public StringField IdAlumnoCursoApellido;
            public DateTimeField IdAlumnoCursoFechaNacimiento;
            public StringField IdAlumnoCursoDireccion;
            public StreamField IdAlumnoCursoFoto;
            public StringField IdAlumnoCursoSexo;
            public Int32Field IdAlumnoCursoIdUsuarioAlumno;
            public Int32Field IdAlumnoCursoIdRolAlumno;

            public StringField IdDocenteCursoNombre;
            public StringField IdDocenteCursoApellido;
            public StringField IdDocenteCursoTelefono;
            public DateTimeField IdDocenteCursoFechaNacimeinto;
            public StringField IdDocenteCursoGradoAcademico;
            public StringField IdDocenteCursoDireccion;
            public StreamField IdDocenteCursoFoto;
            public StringField IdDocenteCursoSexo;
            public Int32Field IdDocenteCursoIdUsuarioDocente;
            public Int32Field IdDocenteCursoIdRolDocente;
            public Int32Field IdDocenteCursoIdCentroEducativoDocente;
        }
    }
}
