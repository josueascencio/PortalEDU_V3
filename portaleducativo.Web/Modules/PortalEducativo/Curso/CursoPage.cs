using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace portaleducativo.PortalEducativo.Pages
{

    [PageAuthorize(typeof(Entities.CursoRow))]
    public class CursoController : Controller
    {
        [Route("PortalEducativo/Curso")]
        public ActionResult Index()
        {
            return View("~/Modules/PortalEducativo/Curso/CursoIndex.cshtml");
        }
    }
}