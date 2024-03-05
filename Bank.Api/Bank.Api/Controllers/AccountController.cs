using Bank.Api.Models;
using Bank.Api.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
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
                return BadRequest(new ApiBadResponse("Something Went Wrong"));
            }
            return Ok(new ApiOkResponse(result));
        }

        [HttpPost("signIn/{username}/{password}")]
        public async Task<IActionResult> SignIn(string username,string password)
        {
            var user = await _accountRepository.SignIn(username, password);
            if (string.IsNullOrEmpty(user.Token))
            {
                return Unauthorized(new ApiBadResponse("Incorrect Username or Password"));
            }
            return Ok(new ApiOkResponse(user));
        }

        [HttpPost("addRole/{roleName}")]
        public async Task<IActionResult> AddRole(string roleName)
        {
            var role = await _accountRepository.AddRole(roleName);
            return Ok(new ApiOkResponse(role));
        }

    }
}
