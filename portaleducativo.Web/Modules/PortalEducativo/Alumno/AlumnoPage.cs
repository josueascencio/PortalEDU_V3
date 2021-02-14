using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace portaleducativo.PortalEducativo.Pages
{

    [PageAuthorize(typeof(Entities.AlumnoRow))]
    public class AlumnoController : Controller
    {
        [Route("PortalEducativo/Alumno")]
        public ActionResult Index()
        {
            return View("~/Modules/PortalEducativo/Alumno/AlumnoIndex.cshtml");
        }
    }
}