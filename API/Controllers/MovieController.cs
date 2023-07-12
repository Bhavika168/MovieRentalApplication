using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentMovie.Data;
using RentMovie.Models;
using System.Linq;


namespace RentMovie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MovieController : ControllerBase
    {

        private ApplicationDbContext _dbContext;
        public MovieController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("all")]
        public IActionResult GetAll()
        {
            var movies = _dbContext.Movies.ToList();
            return Ok(movies);
        }


        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            var movie = _dbContext.Movies.FirstOrDefault(x => x.MovieId == id);

            if (movie == null)
            {
                return NotFound($"Movie with ID {id} not found."); 
            }

            return Ok(movie); 
        }




        [HttpPost]
        public IActionResult Create(Movie movie)
        {
            try
            {
                var existingMovie = _dbContext.Movies.Find(movie.MovieId);

                if (existingMovie != null)
                {
                    return StatusCode(403, "Movie already exists.");
                }

                if (ModelState.IsValid)
                {
                    _dbContext.Movies.Add(movie);
                    _dbContext.SaveChanges();

                    return RedirectToAction("GetAll");
                }
            }

            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }

            return StatusCode(500, "Error in creating Movie.");
            // return View(movie); 
        }
   



        [HttpPut]
        [Route("{id}")]
        public IActionResult Update(Movie movie, int id)
        {
            try
            {
                var existingMovie = _dbContext.Movies.Find(id);

                if (existingMovie == null)
                {
                    return StatusCode(404, $"Movie with ID {id} not found.");
                }

                if (ModelState.IsValid)
                {
                    // Update the movie properties

                    existingMovie.Title = movie.Title;
                    existingMovie.IsAvailable = movie.IsAvailable;

                    _dbContext.SaveChanges();
                    var movies = _dbContext.Movies.ToList();
                    return Ok(movies);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }

            return StatusCode(500, "Error in updating Movie.");
        }


        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var movie = _dbContext.Movies.Find(id);

                if (movie == null)
                {
                    return StatusCode(404, $"Movie with ID {id} not found.");
                }

                _dbContext.Movies.Remove(movie);
                _dbContext.SaveChanges();

                var movies = _dbContext.Movies.ToList();
                return Ok(movies);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }


    }
}
