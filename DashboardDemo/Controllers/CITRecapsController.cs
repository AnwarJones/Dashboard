using DashboardDemo.Models.DashboardModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DashboardDemo.Controllers
{
    public class CITRecapsController : ApiController
    {
        private ModelsContext _db = new ModelsContext();

        public IEnumerable<citRecap2> Get()
        {
            return _db.citRecap2.ToList();
        }


        //[HttpGet]
        //[Route("api/citrecaps/totals")]
        //public decimal Totals()
        //{
        //    decimal total = 0;
        //    foreach (var cit in _db.CITRecaps)
        //    {
        //        total += cit.TransactionAmount.GetValueOrDefault();
        //    }
        //    return total;
        //}
        //[HttpGet]
        //[Route("api/citrecaps/average")]
        //public decimal Average()
        //{
        //    decimal temp = 0;
        //    foreach (var cit in _db.CITRecaps)
        //    {                
        //        temp += cit.TransactionAmount.GetValueOrDefault();
        //    }
        //    return temp / _db.CITRecaps.Count();
            
        //}
    }
    
}
