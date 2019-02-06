using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace loginAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private static List<Login> allLogin = new List<Login>();

        // POST api/login
        [HttpPost]
        public void Post([FromBody] Login value)
        {
            allLogin.Add(value);
        }

        // GET api/login
        [HttpGet]
        public ActionResult<IEnumerable<Login>> Get()
        {
            return allLogin;
        }


        // POST  api/login/login
        [HttpPost("login")]
        public bool Postlogin([FromBody] Login value)
        {
            //var selectUser = allLogin.Find(it => (it.username == value.username) && (it.password == value.password));

            //ถ้ามีuser: เช็คpassที่ส่งเข้ามา == กับพาสที่มีอยู่มั้ย // ตรงกัน 
            // if ((selectUser != null) && (selectUser.password == value.password))
            // {

            //     return true;

            // }
            //ถ้ามีuser: เช็คpassที่ส่งเข้ามา == กับพาสที่มีอยู่มั้ย // ไม่ตรงกัน  
            // else if ((selectUser != null) && (selectUser.password != value.password))
            // {
            //     return false;
            // }

            return allLogin.Any(it => it.username == value.username && it.password == value.password);
            // return false;
        }


    }
}
