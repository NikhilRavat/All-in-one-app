using Bank.Api.Data;
using Bank.Api.Models;
using Bank.Api.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Bank.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankAccountController : ControllerBase
    {
        private readonly BankAccountsRepository _bankAccounts;

        public BankAccountController(BankAccountsRepository bankAccounts)
        {
            _bankAccounts = bankAccounts;
        }
        [HttpPost("openAccount")]
        public async Task<IActionResult> OpenBankAccount(BankAccount bankAccount)
        {
            var accountId = await _bankAccounts.CreateBankAccount(bankAccount);
            return Ok(new ApiOkResponse(new
            {
                accountId
            }));
        }
    }
}
