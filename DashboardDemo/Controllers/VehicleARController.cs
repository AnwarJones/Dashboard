using DashboardDemo.Models.DashboardModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DashboardDemo.Controllers
{
    public class VehicleARController : ApiController
    {
        private ModelsContext _db = new ModelsContext();

        public IEnumerable<VehicleAR> Get()
        {
            return _db.VehicleARs.ToList();
        }
    }
}
