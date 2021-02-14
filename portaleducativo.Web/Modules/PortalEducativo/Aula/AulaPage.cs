using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace portaleducativo.PortalEducativo.Pages
{

    [PageAuthorize(typeof(Entities.AulaRow))]
    public class AulaController : Controller
    {
        [Route("PortalEducativo/Aula")]
        public ActionResult Index()
        {
            return View("~/Modules/PortalEducativo/Aula/AulaIndex.cshtml");
        }
    }
}