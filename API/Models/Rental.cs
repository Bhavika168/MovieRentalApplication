using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentMovie.Models
{
    public class Rental
    {
        [Key]
        public int RentalId { get; set; }
        [ForeignKey("UserId")]
        public int UserId { get; set; }
        [ForeignKey("MovieId")]
        public int MovieId { get; set; }
        public DateTime RentalDate { get; set; }
        public DateTime DueDate { get; set; }
        public string IsReturned { get; set; }

      /*  [ForeignKey("UserId")]
        public User User { get; set; }

        [ForeignKey("MovieId")]
        public Movie Movie { get; set; }
      */
    }
}
