using Microsoft.EntityFrameworkCore;

namespace Bank.Api.Data
{    
    public class Enumerations
    {
        public int Id { get; set; }
        public string Table { get; set; }
        public string Column { get; set; }
        public string Text { get; set; }
        public int Value { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Updated { get; set; }
    }
}
