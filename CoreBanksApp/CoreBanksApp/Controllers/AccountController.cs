using CoreBanksApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoreBanksApp.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginModel model,string returnUrl)
        {
            if (ModelState.IsValid)
            {
                using(var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri("https://localhost:44367/");
                    var result = await httpClient.PostAsync($"api/Account/signIn/{model.UserName}/{model.Password}",null);
                    var content = await result.Content.ReadAsStringAsync();

                    if (!string.IsNullOrEmpty(content))
                    {
                        HttpContext.Session.SetString("User",content);
                    }
                }
            }
            return View();
        }

    }
}
