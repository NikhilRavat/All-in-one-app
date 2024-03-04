using System.ComponentModel.DataAnnotations;

namespace Bank.Api.Data
{
    public class Banks
    {
        public int Id { get; set; }
        [MaxLength(100)]
        public string BankName { get; set; }
        [MaxLength(100)]
        public string ContactNumber { get; set; }
        [MaxLength(100)]
        public string Email { get; set; }
        [MaxLength(100)]
        public string Website { get; set; }        
        public string BankLogoUrl { get; set; }
    }
}
