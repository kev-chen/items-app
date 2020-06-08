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
using System.Linq.Expressions;

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
        public IActionResult GetMaxPrices()
        {
            try
            {
                return Ok(_itemService.GetMaxPrices());
            }
            catch (ItemNotFoundException ex)
            {
                // Capture the log in heroku logs
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return NotFound();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return StatusCode(500);
            }
        }

        // GET api/items/max-prices/{itemName}
        [HttpGet("max-prices/{itemName}")]
        public IActionResult GetMaxPriceForItem(string itemName)
        {
            try
            {
                return Ok(new { Price = _itemService.GetMaxPriceForItem(itemName) });
            }
            catch (ItemNotFoundException ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return NotFound();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return StatusCode(500);
            }
        }

        // GET: api/items
        [HttpGet]
        public IActionResult GetAllItems()
        {
            try
            {
                return Ok(_itemService.GetAllItems());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return StatusCode(500);
            }
        }

        // GET: api/items/{id}
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try
            {
                return Ok(_itemService.GetById(id));
            }
            catch (ItemNotFoundException ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return NotFound();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return StatusCode(500);
            }
        }

        // DELETE: api/items/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteItem(int id)
        {
            try
            {
                _itemService.DeleteItem(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return StatusCode(500);
            }
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
            catch (ItemNotFoundException ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return NotFound();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return StatusCode(500);
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
            catch (Exception ex)
            {
                Console.WriteLine($"Exception in {MethodBase.GetCurrentMethod().Name}: {ex.Message}");
                return StatusCode(500);
            }
        }
    }
}
