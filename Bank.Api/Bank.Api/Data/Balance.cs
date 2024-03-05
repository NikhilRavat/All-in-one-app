using System.ComponentModel.DataAnnotations;

namespace Bank.Api.Data
{
    public class Balance
    {
        [Key]
        public Guid BalanceId { get; set; }
        public Guid AccountId { get; set; }
        public double BalanceAmount { get; set; }
    }
}
