using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace TeamOrganizr.Web.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class SquadsController : Controller
    {
        [HttpGet]
        public IEnumerable<Squad> Get()
        {
          return new List<Squad> {
            new Squad{ Desc = "U17, U16, U15 technical training", Name="U17 Technical Squad", Players = 13 },
            new Squad{ Desc = "U14", Name="U14", Players = 10 },
            new Squad{ Desc = "U13", Name="U13", Players = 17 },
          };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    public class Squad
    {
      public string Desc { get; internal set; }
      public string Name { get; internal set; }
      public int Players{ get; internal set; }
    }
  }
}
