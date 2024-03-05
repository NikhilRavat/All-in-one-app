using Bank.Api.Data;
using Bank.Api.Models;
using Bank.Api.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Bank.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BanksController : ControllerBase
    {        
        private readonly IBanksRepository _banksRepository;

        public BanksController(IBanksRepository banksRepository)
        {            
            _banksRepository = banksRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GetBanks()
        {
            return Ok(new ApiOkResponse(await _banksRepository.GetBanks()));
        }
    }
}
