using System.ComponentModel.DataAnnotations;

namespace RentMovie.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; }

        public string Password { get; set; }
        public int Contact { get; set; }

        public string Email { get; set; }

        public string Status { get; set; }
    }
}
