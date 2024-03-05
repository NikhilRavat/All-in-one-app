using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bank.Api.Data
{
    public class BankAccount
    {
        [Key]
        public Guid AccountId { get; set; }
        public Guid UserId { get; set; }
        public int BankId { get; set; }
        [ForeignKey("BankId")]
        public virtual Banks Banks { get; set; }
        public string AccountHolder { get; set; }
        public string AccountNumber { get; set; }
        public int AccountType { get; set; }
    }
}
