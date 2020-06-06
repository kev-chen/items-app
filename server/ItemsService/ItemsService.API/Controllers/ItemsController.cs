using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ItemsService.Data.Entities;
using ItemsService.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ItemsService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IItemService _itemService;
        public ItemsController(IItemService itemService)
        {
            _itemService = itemService;
        }

        // GET: api/values
        [HttpGet("max-prices")]
        public IActionResult GetMaxPriceForItems()
        {
            return Ok(_itemService.GetMaxPrices());
        }

        // GET api/values/5
        [HttpGet("max-prices/{itemName}")]
        public IActionResult GetMaxPriceForItem(string itemName)
        {
            return Ok(new { Price = _itemService.GetMaxPriceForItem(itemName) });
        }
    }
}
