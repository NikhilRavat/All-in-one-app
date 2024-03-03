﻿using Bank.Api.Data;
using Bank.Api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Bank.Api.Repository
{
    public interface IAccountRepository
    {
        Task<string> SignIn(string username, string password);
        Task<IdentityResult> SignUp(SignUpModel model);
    }

    public class AccountRepository : IAccountRepository
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IConfiguration _config;

        public AccountRepository(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IConfiguration config)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _config = config;
        }

        public async Task<IdentityResult> SignUp(SignUpModel model)
        {
            return await _userManager.CreateAsync(
                new ApplicationUser
                {
                    UserName = model.Usernmae,
                    Email = model.Email,
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Password = model.Password
                }, model.Password);
        }

        public async Task<string> SignIn(string username, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(username, password, false, false);
            if (result.Succeeded)
            {
                var authClaims = new List<Claim>() {
                   new Claim(ClaimTypes.Name,username),
                   new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
               };

                var authSignKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _config["JWT:ValidUser"],
                    audience: _config["JWT:ValidAudience"],
                    expires: DateTime.Now.AddDays(1),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSignKey, SecurityAlgorithms.HmacSha256Signature));
                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            return string.Empty;
        }
    }
}
