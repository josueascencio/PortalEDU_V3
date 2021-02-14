using Serenity.Navigation;
using PortalEducativo = portaleducativo.PortalEducativo.Pages;



[assembly: NavigationMenu(5000, "Crear Usuario", icon: "fas fa-plus-circle")]

[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Crear Usuario/Alumno",
    typeof(PortalEducativo.AlumnoController), icon: "fas fa-user")]
[assembly: Serenity.Navigation.NavigationLink(int.MaxValue, "Crear Usuario/Docente",
    typeof(PortalEducativo.AlumnoController), icon: "fas fa-user")]

