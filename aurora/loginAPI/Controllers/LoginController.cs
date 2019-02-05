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

        // POST username / password
        [HttpPost]
        public void Post([FromBody] Login value)
        {
            allLogin.Add(value);
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Login>> Get()
        {
            return allLogin;
        }


        // POST login(collect)
        [HttpPost("{username}/{password}")]
        public bool Postlogin([FromBody] Login value)
        {
            //หาว่ามี user ที่กรอกเข้ามาหรือเปล่า
            var selectedUSER = allLogin.Where(it => it.username == it.username).FirstOrDefault();
            foreach (var item in selectedUSER)
            {
                
            }
            if (selectedUSER == null)
            {
                // ถ้าไม่มีผู้ใช้ที่เลือก ไม่ทำต่อ
                return false;
            }
            // มี user ทำการค้นหาว่า Password  ที่ใส่เข้ามา ตรงกับ Password ที่มีอยู่แล้วหรือเปล่า
            var haveUser = a.FirstOrDefault(it => it.password == it.password);
            {
                haveUser.password = value.password;
            };
            return true;




        //   var selectUser = allLogin.Where(it => (it.username == value.username) && (it.password == value.password)).FirstOrDefault();

        //     //ถ้ามีuser: เช็คpassที่ส่งเข้ามา == กับพาสที่มีอยู่มั้ย // ตรงกัน 
        //     if ((selectUser != null) && (selectUser.password == value.password))
        //     {

        //         return true;

        //     }
        //     //ถ้ามีuser: เช็คpassที่ส่งเข้ามา == กับพาสที่มีอยู่มั้ย // ไม่ตรงกัน  
        //     else if ((selectUser != null) && (selectUser.password != value.password))
        //     {
        //         return false;
        //     }

        //     return false;
        }


        



        // GET login(collect)
        [HttpGet("{username}/{password}")]
        public Boolean GetLogin(string username, string password)
        {
            var user = allLogin.Find(it => (it.username == username) && (it.password == password));

            return true;


            //ถ้ามีuser เช็คpassที่ส่งเข้ามา == กับพาสที่มีอยู่มั้ย // ไม่ตรงกัน 
            // if ((selectUser != null))
            // {
            //     return false;
            // }

            //ถ้ามีuser เช็คpassที่ส่งเข้ามา == กับพาสที่มีอยู่มั้ย // ตรงกัน 
            // if ((selectUser != null))
            // {
            //     return true;
            // }
            // else
            // {
            //     //ถ้าไม่มี user = null
            //     return false;
            // }


        }
    }
}
