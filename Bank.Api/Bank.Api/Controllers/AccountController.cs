using Bank.Api.Models;
using Bank.Api.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bank.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        //username = nik_ravat
        //password = Test@2024
        private readonly IAccountRepository _accountRepository;

        public AccountController(IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        [HttpPost("signUp")]
        public async Task<IActionResult> SignUp(SignUpModel model)
        {
            var result = await _accountRepository.SignUp(model);
            if (!result.Succeeded)
            {
                return BadRequest("Something Went Wrong");
            }
            return Ok(result);
        }

        [HttpPost("signIn/{username}/{password}")]
        public async Task<IActionResult> SignIn(string username,string password)
        {
            var token = await _accountRepository.SignIn(username, password);
            if (string.IsNullOrEmpty(token))
            {
                return Unauthorized(new
                {
                    isSuccess = false,
                    message = "Incorrect Username or Password"
                });
            }
            return Ok(new
            {
                token
            });
        }
    }
}
