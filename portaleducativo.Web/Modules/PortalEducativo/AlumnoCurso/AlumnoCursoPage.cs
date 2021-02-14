using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace portaleducativo.PortalEducativo.Pages
{

    [PageAuthorize(typeof(Entities.AlumnoCursoRow))]
    public class AlumnoCursoController : Controller
    {
        [Route("PortalEducativo/AlumnoCurso")]
        public ActionResult Index()
        {
            return View("~/Modules/PortalEducativo/AlumnoCurso/AlumnoCursoIndex.cshtml");
        }
    }
}