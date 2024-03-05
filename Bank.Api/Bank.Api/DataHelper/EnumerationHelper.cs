using Bank.Api.Data;

namespace Bank.Api.DataHelper
{
    public class EnumerationHelper
    {
        public static List<Enumerations> GetEnumerations()
        {
            return new List<Enumerations>()
            {
                new Enumerations(){Id = 1,Table = "BankAccounts", Column = "AccountType",Text = "Savings",Value = 1,Created = DateTime.Now},
                new Enumerations(){Id = 2,Table = "BankAccounts", Column = "AccountType",Text = "Current",Value = 2,Created = DateTime.Now},
                new Enumerations(){Id = 3,Table = "BankAccounts", Column = "AccountType",Text = "Recurring",Value = 3,Created = DateTime.Now},                
                new Enumerations(){Id = 4,Table = "BankAccounts", Column = "AccountType",Text = "Salary",Value = 4,Created = DateTime.Now}                
            };
        }
    }
}
