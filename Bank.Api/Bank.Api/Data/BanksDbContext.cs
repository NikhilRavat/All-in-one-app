using Bank.Api.DataHelper;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bank.Api.Data
{
    public class BanksDbContext : IdentityDbContext<ApplicationUser>
    {
        public BanksDbContext(DbContextOptions<BanksDbContext> options):base(options) { }

        public DbSet<Banks> Banks { get; set; }
        public DbSet<Balance> Balances { get; set; }
        public DbSet<BankAccount> BankAccounts { get; set; }
        public DbSet<Enumerations> Enumerations { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Enumerations>().HasData(EnumerationHelper.GetEnumerations());
        }
    }
}
