using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace CoreBanksApp.Helper
{
    public class ApiAuthorizeAttribute : TypeFilterAttribute
    {
        public ApiAuthorizeAttribute() : base(typeof(ApiAuthorizeFilter))
        {
        }
    }
    public class ApiAuthorizeFilter : AuthorizeAttribute, IAuthorizationFilter
    {

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            string user = string.Empty;
            try
            {
                user = context.HttpContext.Session.GetString("user");
            }
            catch (Exception ex)
            {
                user = string.Empty;
            }
            if (string.IsNullOrEmpty(user))
            {
                context.Result = new RedirectToActionResult("Login", "Account",
                    new
                    {
                        returnUrl = context.HttpContext.Request.Path
                    });
            }
            return;
        }
    }
}
