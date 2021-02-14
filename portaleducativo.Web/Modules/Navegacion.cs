using Serenity.Navigation;
using Modules = portaleducativo.PortalEducativo.Pages;


[assembly: NavigationMenu(10000, "Bienvenidos", icon: "fas fa-plus-circle")]



[assembly: NavigationMenu(20000, "Registro Educativo", icon: "fas fa-plus-circle")]

[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Registro Educativo/Alumno",
    typeof(Modules.AlumnoController), icon: "fas fa-user")]

[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Registro Educativo/Docente",
    typeof(Modules.DocenteController), icon: "fas fa-user")]
[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Registro Educativo/Centro Educativo",
    typeof(Modules.CentroEducativoController), icon: "fas fa-user")]



[assembly: NavigationMenu(30000, "Administracion Academica", icon: "fas fa-plus-circle")]

[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Administracion Academica/Crear Aula",
    typeof(Modules.AulaController), icon: "fas fa-user")]
[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Administracion Academica/Curso",
    typeof(Modules.CursoController), icon: "fas fa-user")]
[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Administracion Academica/Tarea",
    typeof(Modules.TareaController), icon: "fas fa-user")]

