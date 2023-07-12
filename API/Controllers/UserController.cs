using Microsoft.AspNetCore.Mvc;
using RentMovie.Data;
using RentMovie.Models;

namespace RentMovie.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserController : ControllerBase
    {
        private ApplicationDbContext _dbContext;
        public UserController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpGet]
        [Route("all")]
        public IActionResult GetAll()
        {
            var users = _dbContext.Users.ToList();
            return Ok(users);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            var user = _dbContext.Users.FirstOrDefault(x => x.UserId == id);

            if (user == null)
            {
                return NotFound($"User with ID {id} not found.");
            }

            return Ok(user);
        }


        [HttpPost]
        public ActionResult Create(User user)
        {
            try
            {

            var existingUser = _dbContext.Users.Find(user.UserId);

            if (existingUser != null)
            {
                Response.StatusCode = 403;
                return Content($"User already exist.");
            }


            if (ModelState.IsValid)
            {

                _dbContext.Users.Add(user);
                _dbContext.SaveChanges();

                return RedirectToAction("GetAll"); 
            }

            }

            catch (Exception ex)
            {
                Response.StatusCode = 500;
                return Content($"Error: {ex.Message}");
            }
            Response.StatusCode = 500;
            return Content($"Error in creating User.");
            // return View(movie); 
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Update(User user, int id)
        {
            try
            {
                var existingUser = _dbContext.Users.Find(id);

                if (existingUser == null)
                {
                    return NotFound($"User with ID {id} not found.");
                }

                if (ModelState.IsValid)
                {
                    // Update the user properties
                    existingUser.Name = user.Name;
                    existingUser.Password = user.Password;
                    existingUser.Contact = user.Contact;
                    existingUser.Email = user.Email;
                    existingUser.Status = user.Status;

                    _dbContext.SaveChanges();

                    var users = _dbContext.Users.ToList();
                    return Ok(users);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }

            return StatusCode(500, "Error in updating User.");
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                var user = _dbContext.Users.Find(id);

                if (user == null)
                {
                    return NotFound($"User with ID {id} not found.");
                }

                _dbContext.Users.Remove(user);
                _dbContext.SaveChanges();

                var users = _dbContext.Users.ToList();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }

    }
    
}
