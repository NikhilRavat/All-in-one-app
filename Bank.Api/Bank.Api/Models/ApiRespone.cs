namespace Bank.Api.Models
{
    public class ApiOkResponse
    {
        public ApiOkResponse(dynamic data)
        {
            Data = data;
        }

        public dynamic Data { get; set; }
        public string Message { get; set; } = string.Empty;
        public bool IsSuccess { get; set; } = true;
    }

    public class ApiBadResponse
    {
        public ApiBadResponse(string message)
        {
            Message = message;
        }
        public string Message { get; set; }        
        public bool IsSuccess { get; set; } = false;
    }
}
