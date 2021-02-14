using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace portaleducativo.PortalEducativo.Pages
{

    [PageAuthorize(typeof(Entities.CentroEducativoRow))]
    public class CentroEducativoController : Controller
    {
        [Route("PortalEducativo/CentroEducativo")]
        public ActionResult Index()
        {
            return View("~/Modules/PortalEducativo/CentroEducativo/CentroEducativoIndex.cshtml");
        }
    }
}