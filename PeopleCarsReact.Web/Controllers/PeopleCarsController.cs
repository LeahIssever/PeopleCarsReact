using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PeopleCarsReact.Data;
using PeopleCarsReact.Web.Models;

namespace PeopleCarsReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private readonly string _connectionString;

        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getpeople")]
        public List<Person> GetPeople()
        {
            var repo = new PeopleCarsRepo(_connectionString);
            return repo.GetPeople();
        }

        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            repo.AddPerson(person);
        }

        [HttpGet]
        [Route("getperson")]
        public Person GetPersonById(int id)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            return repo.GetPersonById(id);
        }

        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            repo.AddCar(car);
        }

        [HttpGet]
        [Route("getcars")]
        public List<Car> GetCarsbyId(int personId)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            return repo.GetCarsbyId(personId);
        }

        [HttpPost]
        [Route("deletecars")]
        public void DeleteCarsForPerson(DeleteCarsViewModel vm)
        {
            var repo = new PeopleCarsRepo(_connectionString);
            repo.DeleteCarsForPerson(vm.personId);
        }
    }
}
