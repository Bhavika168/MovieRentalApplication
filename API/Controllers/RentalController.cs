using Microsoft.AspNetCore.Mvc;
using RentMovie.Data;
using RentMovie.Models;

namespace RentMovie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class RentalController : ControllerBase
    {
        private ApplicationDbContext _dbContext;
        public RentalController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("all")]
        public IActionResult GetAll()
        {
            var rentals = _dbContext.Rentals.ToList();
            return Ok(rentals);
        }


        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            var rental = _dbContext.Rentals.FirstOrDefault(x => x.RentalId == id);

            if (rental == null)
            {
                Response.StatusCode = 404;
                return Content($"Rental with ID {id} not found.");
            }
            return Ok(rental);
        }


        [HttpPost]
        public IActionResult Create(Rental rental)
        {
            try
            {
                var existingRental = _dbContext.Rentals.Find(rental.RentalId);

                if (existingRental != null)
                {
                    return StatusCode(403, "Rental already exists.");
                }

                if (ModelState.IsValid)
                {
                    _dbContext.Rentals.Add(rental);
                    _dbContext.SaveChanges();

                    return RedirectToAction("GetAll");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }

            return StatusCode(500, "Error in creating Rental.");
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update(Rental rental, int id)
        {
            try
            {
                var existingRental = _dbContext.Rentals.Find(id);

                if (existingRental == null)
                {
                    return NotFound($"Rental with ID {id} not found.");
                }

                if (ModelState.IsValid)
                {
                    // Update the rental properties
                    existingRental.UserId = rental.UserId;
                    existingRental.MovieId = rental.MovieId;
                    existingRental.RentalDate = rental.RentalDate;
                    existingRental.DueDate = rental.DueDate;
                    existingRental.IsReturned = rental.IsReturned;

                    _dbContext.SaveChanges();

                    var rentals = _dbContext.Rentals.ToList();
                    return Ok(rentals);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }

            return StatusCode(500, "Error in updating Rental.");
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var rental = _dbContext.Rentals.Find(id);

                if (rental == null)
                {
                    return NotFound($"Rental with ID {id} not found.");
                }

                _dbContext.Rentals.Remove(rental);
                _dbContext.SaveChanges();

                var rentals = _dbContext.Rentals.ToList();
                return Ok(rentals);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }
    }
}
