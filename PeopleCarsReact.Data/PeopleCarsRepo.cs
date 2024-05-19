using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PeopleCarsReact.Data
{
    public class PeopleCarsRepo
    {
        private readonly string _connectionString;

        public PeopleCarsRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetPeople()
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.People.Include(p => p.Cars).ToList();
        }
        public Person GetPersonById(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.People.FirstOrDefault(p => p.Id == id);
        }

        public void AddPerson(Person p)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.People.Add(p);
            context.SaveChanges();
        }

        public void AddCar(Car c)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Cars.Add(c);
            context.SaveChanges();
        }

        public List<Car> GetCarsbyId(int personId)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == personId).ToList();
        }

        public void DeleteCarsForPerson(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            var carsToDelete = context.Cars.Where(c => c.PersonId == id);
            context.Cars.RemoveRange(carsToDelete);
            context.SaveChanges();
        }
    }
}
