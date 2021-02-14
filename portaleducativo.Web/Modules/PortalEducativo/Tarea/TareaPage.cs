using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace portaleducativo.PortalEducativo.Pages
{

    [PageAuthorize(typeof(Entities.TareaRow))]
    public class TareaController : Controller
    {
        [Route("PortalEducativo/Tarea")]
        public ActionResult Index()
        {
            return View("~/Modules/PortalEducativo/Tarea/TareaIndex.cshtml");
        }
    }
}