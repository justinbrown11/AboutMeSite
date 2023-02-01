using AboutMe.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AboutMe.Controllers
{
    public class MainController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
