using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace portaleducativo.PortalEducativo.Entities
{
    [ConnectionKey("Default"), Module("PortalEducativo"), TableName("[dbo].[Aula]")]
    [DisplayName("Aula"), InstanceName("Aula")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AulaRow : Row<AulaRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id Aula"), Column("Id_Aula"), Identity, IdProperty]
        public Int32? IdAula
        {
            get => fields.IdAula[this];
            set => fields.IdAula[this] = value;
        }

        [DisplayName("Nombre"), Size(50), QuickSearch, NameProperty]
        public String Nombre
        {
            get => fields.Nombre[this];
            set => fields.Nombre[this] = value;
        }

        [DisplayName("Seccion"), Size(50)]
        public String Seccion
        {
            get => fields.Seccion[this];
            set => fields.Seccion[this] = value;
        }

        [DisplayName("Id Alumno Aula"), Column("Id_Alumno_Aula"), ForeignKey("[dbo].[Alumno]", "Id_Alumno"), LeftJoin("jIdAlumnoAula"), TextualField("IdAlumnoAulaCarnet")]
        public Int32? IdAlumnoAula
        {
            get => fields.IdAlumnoAula[this];
            set => fields.IdAlumnoAula[this] = value;
        }

        [DisplayName("Id Docente Aula"), Column("Id_Docente_Aula"), ForeignKey("[dbo].[Docente]", "Id_Docente"), LeftJoin("jIdDocenteAula"), TextualField("IdDocenteAulaNombre")]
        public Int32? IdDocenteAula
        {
            get => fields.IdDocenteAula[this];
            set => fields.IdDocenteAula[this] = value;
        }

        [DisplayName("Id Curso Aula"), Column("Id_Curso_Aula"), ForeignKey("[dbo].[Curso]", "Id_Curso"), LeftJoin("jIdCursoAula"), TextualField("IdCursoAulaNombre")]
        public Int32? IdCursoAula
        {
            get => fields.IdCursoAula[this];
            set => fields.IdCursoAula[this] = value;
        }

        [DisplayName("Id Alumno Aula Carnet"), Expression("jIdAlumnoAula.[Carnet]")]
        public String IdAlumnoAulaCarnet
        {
            get => fields.IdAlumnoAulaCarnet[this];
            set => fields.IdAlumnoAulaCarnet[this] = value;
        }

        [DisplayName("Id Alumno Aula Nombre"), Expression("jIdAlumnoAula.[Nombre]")]
        public String IdAlumnoAulaNombre
        {
            get => fields.IdAlumnoAulaNombre[this];
            set => fields.IdAlumnoAulaNombre[this] = value;
        }

        [DisplayName("Id Alumno Aula Apellido"), Expression("jIdAlumnoAula.[Apellido]")]
        public String IdAlumnoAulaApellido
        {
            get => fields.IdAlumnoAulaApellido[this];
            set => fields.IdAlumnoAulaApellido[this] = value;
        }

        [DisplayName("Id Alumno Aula Fecha Nacimiento"), Expression("jIdAlumnoAula.[Fecha_Nacimiento]")]
        public DateTime? IdAlumnoAulaFechaNacimiento
        {
            get => fields.IdAlumnoAulaFechaNacimiento[this];
            set => fields.IdAlumnoAulaFechaNacimiento[this] = value;
        }

        [DisplayName("Id Alumno Aula Direccion"), Expression("jIdAlumnoAula.[Direccion]")]
        public String IdAlumnoAulaDireccion
        {
            get => fields.IdAlumnoAulaDireccion[this];
            set => fields.IdAlumnoAulaDireccion[this] = value;
        }

        [DisplayName("Id Alumno Aula Foto"), Expression("jIdAlumnoAula.[Foto]")]
        public Stream IdAlumnoAulaFoto
        {
            get => fields.IdAlumnoAulaFoto[this];
            set => fields.IdAlumnoAulaFoto[this] = value;
        }

        [DisplayName("Id Alumno Aula Sexo"), Expression("jIdAlumnoAula.[Sexo]")]
        public String IdAlumnoAulaSexo
        {
            get => fields.IdAlumnoAulaSexo[this];
            set => fields.IdAlumnoAulaSexo[this] = value;
        }

        [DisplayName("Id Alumno Aula Id Usuario Alumno"), Expression("jIdAlumnoAula.[Id_Usuario_Alumno]")]
        public Int32? IdAlumnoAulaIdUsuarioAlumno
        {
            get => fields.IdAlumnoAulaIdUsuarioAlumno[this];
            set => fields.IdAlumnoAulaIdUsuarioAlumno[this] = value;
        }

        [DisplayName("Id Alumno Aula Id Rol Alumno"), Expression("jIdAlumnoAula.[Id_Rol_Alumno]")]
        public Int32? IdAlumnoAulaIdRolAlumno
        {
            get => fields.IdAlumnoAulaIdRolAlumno[this];
            set => fields.IdAlumnoAulaIdRolAlumno[this] = value;
        }

        [DisplayName("Id Docente Aula Nombre"), Expression("jIdDocenteAula.[Nombre]")]
        public String IdDocenteAulaNombre
        {
            get => fields.IdDocenteAulaNombre[this];
            set => fields.IdDocenteAulaNombre[this] = value;
        }

        [DisplayName("Id Docente Aula Apellido"), Expression("jIdDocenteAula.[Apellido]")]
        public String IdDocenteAulaApellido
        {
            get => fields.IdDocenteAulaApellido[this];
            set => fields.IdDocenteAulaApellido[this] = value;
        }

        [DisplayName("Id Docente Aula Telefono"), Expression("jIdDocenteAula.[Telefono]")]
        public String IdDocenteAulaTelefono
        {
            get => fields.IdDocenteAulaTelefono[this];
            set => fields.IdDocenteAulaTelefono[this] = value;
        }

        [DisplayName("Id Docente Aula Fecha Nacimeinto"), Expression("jIdDocenteAula.[Fecha_Nacimeinto]")]
        public DateTime? IdDocenteAulaFechaNacimeinto
        {
            get => fields.IdDocenteAulaFechaNacimeinto[this];
            set => fields.IdDocenteAulaFechaNacimeinto[this] = value;
        }

        [DisplayName("Id Docente Aula Grado Academico"), Expression("jIdDocenteAula.[Grado_Academico]")]
        public String IdDocenteAulaGradoAcademico
        {
            get => fields.IdDocenteAulaGradoAcademico[this];
            set => fields.IdDocenteAulaGradoAcademico[this] = value;
        }

        [DisplayName("Id Docente Aula Direccion"), Expression("jIdDocenteAula.[Direccion]")]
        public String IdDocenteAulaDireccion
        {
            get => fields.IdDocenteAulaDireccion[this];
            set => fields.IdDocenteAulaDireccion[this] = value;
        }

        [DisplayName("Id Docente Aula Foto"), Expression("jIdDocenteAula.[Foto]")]
        public Stream IdDocenteAulaFoto
        {
            get => fields.IdDocenteAulaFoto[this];
            set => fields.IdDocenteAulaFoto[this] = value;
        }

        [DisplayName("Id Docente Aula Sexo"), Expression("jIdDocenteAula.[Sexo]")]
        public String IdDocenteAulaSexo
        {
            get => fields.IdDocenteAulaSexo[this];
            set => fields.IdDocenteAulaSexo[this] = value;
        }

        [DisplayName("Id Docente Aula Id Usuario Docente"), Expression("jIdDocenteAula.[Id_Usuario_Docente]")]
        public Int32? IdDocenteAulaIdUsuarioDocente
        {
            get => fields.IdDocenteAulaIdUsuarioDocente[this];
            set => fields.IdDocenteAulaIdUsuarioDocente[this] = value;
        }

        [DisplayName("Id Docente Aula Id Rol Docente"), Expression("jIdDocenteAula.[Id_Rol_Docente]")]
        public Int32? IdDocenteAulaIdRolDocente
        {
            get => fields.IdDocenteAulaIdRolDocente[this];
            set => fields.IdDocenteAulaIdRolDocente[this] = value;
        }

        [DisplayName("Id Docente Aula Id Centro Educativo Docente"), Expression("jIdDocenteAula.[Id_Centro_Educativo_Docente]")]
        public Int32? IdDocenteAulaIdCentroEducativoDocente
        {
            get => fields.IdDocenteAulaIdCentroEducativoDocente[this];
            set => fields.IdDocenteAulaIdCentroEducativoDocente[this] = value;
        }

        [DisplayName("Id Curso Aula Nombre"), Expression("jIdCursoAula.[Nombre]")]
        public String IdCursoAulaNombre
        {
            get => fields.IdCursoAulaNombre[this];
            set => fields.IdCursoAulaNombre[this] = value;
        }

        [DisplayName("Id Curso Aula Descripcion"), Expression("jIdCursoAula.[Descripcion]")]
        public String IdCursoAulaDescripcion
        {
            get => fields.IdCursoAulaDescripcion[this];
            set => fields.IdCursoAulaDescripcion[this] = value;
        }

        [DisplayName("Id Curso Aula Fecha Inicio"), Expression("jIdCursoAula.[Fecha_Inicio]")]
        public DateTime? IdCursoAulaFechaInicio
        {
            get => fields.IdCursoAulaFechaInicio[this];
            set => fields.IdCursoAulaFechaInicio[this] = value;
        }

        [DisplayName("Id Curso Aula Fecha Fin"), Expression("jIdCursoAula.[Fecha_Fin]")]
        public DateTime? IdCursoAulaFechaFin
        {
            get => fields.IdCursoAulaFechaFin[this];
            set => fields.IdCursoAulaFechaFin[this] = value;
        }

        [DisplayName("Id Curso Aula Estado"), Expression("jIdCursoAula.[Estado]")]
        public String IdCursoAulaEstado
        {
            get => fields.IdCursoAulaEstado[this];
            set => fields.IdCursoAulaEstado[this] = value;
        }

        [DisplayName("Id Curso Aula Aviso"), Expression("jIdCursoAula.[Aviso]")]
        public String IdCursoAulaAviso
        {
            get => fields.IdCursoAulaAviso[this];
            set => fields.IdCursoAulaAviso[this] = value;
        }

        [DisplayName("Id Curso Aula Imagen"), Expression("jIdCursoAula.[Imagen]")]
        public Stream IdCursoAulaImagen
        {
            get => fields.IdCursoAulaImagen[this];
            set => fields.IdCursoAulaImagen[this] = value;
        }

        [DisplayName("Id Curso Aula Id Alumno Curso"), Expression("jIdCursoAula.[Id_Alumno_Curso]")]
        public Int32? IdCursoAulaIdAlumnoCurso
        {
            get => fields.IdCursoAulaIdAlumnoCurso[this];
            set => fields.IdCursoAulaIdAlumnoCurso[this] = value;
        }

        [DisplayName("Id Curso Aula Id Docente Curso"), Expression("jIdCursoAula.[Id_Docente_Curso]")]
        public Int32? IdCursoAulaIdDocenteCurso
        {
            get => fields.IdCursoAulaIdDocenteCurso[this];
            set => fields.IdCursoAulaIdDocenteCurso[this] = value;
        }

        public AulaRow()
            : base()
        {
        }

        public AulaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdAula;
            public StringField Nombre;
            public StringField Seccion;
            public Int32Field IdAlumnoAula;
            public Int32Field IdDocenteAula;
            public Int32Field IdCursoAula;

            public StringField IdAlumnoAulaCarnet;
            public StringField IdAlumnoAulaNombre;
            public StringField IdAlumnoAulaApellido;
            public DateTimeField IdAlumnoAulaFechaNacimiento;
            public StringField IdAlumnoAulaDireccion;
            public StreamField IdAlumnoAulaFoto;
            public StringField IdAlumnoAulaSexo;
            public Int32Field IdAlumnoAulaIdUsuarioAlumno;
            public Int32Field IdAlumnoAulaIdRolAlumno;

            public StringField IdDocenteAulaNombre;
            public StringField IdDocenteAulaApellido;
            public StringField IdDocenteAulaTelefono;
            public DateTimeField IdDocenteAulaFechaNacimeinto;
            public StringField IdDocenteAulaGradoAcademico;
            public StringField IdDocenteAulaDireccion;
            public StreamField IdDocenteAulaFoto;
            public StringField IdDocenteAulaSexo;
            public Int32Field IdDocenteAulaIdUsuarioDocente;
            public Int32Field IdDocenteAulaIdRolDocente;
            public Int32Field IdDocenteAulaIdCentroEducativoDocente;

            public StringField IdCursoAulaNombre;
            public StringField IdCursoAulaDescripcion;
            public DateTimeField IdCursoAulaFechaInicio;
            public DateTimeField IdCursoAulaFechaFin;
            public StringField IdCursoAulaEstado;
            public StringField IdCursoAulaAviso;
            public StreamField IdCursoAulaImagen;
            public Int32Field IdCursoAulaIdAlumnoCurso;
            public Int32Field IdCursoAulaIdDocenteCurso;
        }
    }
}
