using System.ComponentModel.DataAnnotations;

namespace RentMovie.Models
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        public string Title { get; set; }

        public string IsAvailable { get; set; }
    }
}
