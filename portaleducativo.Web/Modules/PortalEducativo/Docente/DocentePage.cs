using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace portaleducativo.PortalEducativo.Pages
{

    [PageAuthorize(typeof(Entities.DocenteRow))]
    public class DocenteController : Controller
    {
        [Route("PortalEducativo/Docente")]
        public ActionResult Index()
        {
            return View("~/Modules/PortalEducativo/Docente/DocenteIndex.cshtml");
        }
    }
}