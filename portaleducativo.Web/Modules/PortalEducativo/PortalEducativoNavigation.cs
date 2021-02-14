using Serenity.Navigation;
using MyPages = portaleducativo.PortalEducativo.Pages;

[assembly: NavigationLink(int.MaxValue, "PortalEducativo/Alumno", typeof(MyPages.AlumnoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PortalEducativo/Alumno Curso", typeof(MyPages.AlumnoCursoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PortalEducativo/Aula", typeof(MyPages.AulaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PortalEducativo/Centro Educativo", typeof(MyPages.CentroEducativoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PortalEducativo/Curso", typeof(MyPages.CursoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PortalEducativo/Docente", typeof(MyPages.DocenteController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "PortalEducativo/Tarea", typeof(MyPages.TareaController), icon: null)]