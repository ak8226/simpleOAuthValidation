using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OauthProject.API.Controllers
{
    [RoutePrefix("api/orders")]
    public class OrdersController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Order.GetOrders());
        }
    }

    public class Order
    {
        public int OrderId { get; set; }
        public string CustomerName { get; set; }
        public string City { get; set; }

        public static List<Order> GetOrders()
        {
            return new List<Order>{
                new Order { OrderId = 1024,CustomerName = "Akshay",City = "Sangli"},
                new Order { OrderId = 3821, CustomerName = "Nilesh", City = "Pune" },
                new Order { OrderId = 4583, CustomerName = "Tushar", City = "Nagpur" },
                new Order { OrderId = 7829, CustomerName = "Swapnil", City = "Solapur" }
            };
        }

    }
}
