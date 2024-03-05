using Bank.Api.Data;

namespace Bank.Api.Repository
{
    public class BankAccountsRepository
    {
        private readonly BanksDbContext _context;

        public BankAccountsRepository(BanksDbContext context)
        {
            _context = context;
        }

        public async Task<Guid> CreateBankAccount(BankAccount bankAccount)
        {
            await _context.BankAccounts.AddAsync(bankAccount);
            await _context.SaveChangesAsync();
            return bankAccount.AccountId;
        }
    }
}
