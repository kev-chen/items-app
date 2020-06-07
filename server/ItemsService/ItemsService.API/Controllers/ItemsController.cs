using System;
using System.Reflection;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ItemsService.Domain.Exceptions;
using ItemsService.Domain.Models;
using ItemsService.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;
using ItemsService.Domain.BindingModels;
using System.IO;

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

        // GET: api/items/max-prices
        [HttpGet("max-prices")]
        public IActionResult GetMaxPriceForItems()
        {
            return Ok(_itemService.GetMaxPrices());
        }

        // GET api/items/max-prices/{itemName}
        [HttpGet("max-prices/{itemName}")]
        public IActionResult GetMaxPriceForItem(string itemName)
        {
            return Ok(new { Price = _itemService.GetMaxPriceForItem(itemName) });
        }

        // GET: api/items
        [HttpGet]
        public IActionResult GetAllItems()
        {
            return Ok(_itemService.GetAllItems());
        }

        // GET: api/items/{id}
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_itemService.GetById(id));
        }

        // DELETE: api/items/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteItem(int id)
        {
            _itemService.DeleteItem(id);
            return Ok();
        }

        // PUT: api/items/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateItem(int id, [FromBody] UpdateItemBindingModel updateModel)
        {
            updateModel.Id = id;

            try
            {
                var updatedItem = _itemService.UpdateItem(updateModel);
                return Ok(updatedItem);
            }
            catch (AppException ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return BadRequest(new { message = "An error has occured attempting to update" });
            }
        }

        // POST: api/items
        [HttpPost]
        public IActionResult CreateItem([FromBody] Item item)
        {
            try
            {
                Item createdItem = _itemService.CreateItem(item);
                string resourceUrl = Path.Combine(Request.Path.ToString(), Uri.EscapeUriString(createdItem.Id.ToString()));
                return Created(resourceUrl, createdItem);
            }
            catch (AppException ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return BadRequest(new { message = "An error has occured attempting to create" });
            }
        }
    }
}
