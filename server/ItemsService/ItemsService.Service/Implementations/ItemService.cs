using System;
using System.Linq;
using System.Collections.Generic;
using ItemsService.Data.Repositories;
using ItemsService.Domain.Models;
using ItemsService.Service.Interfaces;

namespace ItemsService.Service.Implementations
{
    public class ItemService : IItemService
    {
        private IRepository<Item> _itemRepository;

        public ItemService(IRepository<Item> itemRepository)
        {
            _itemRepository = itemRepository;
        }

        /// <summary>
        /// Gets the max price for a given item
        /// </summary>
        /// <param name="itemName">Item name to query on</param>
        /// <returns>The max price that exists for the item</returns>
        public double GetMaxPriceForItem(string itemName)
        {
            if (string.IsNullOrWhiteSpace(itemName)) throw new ArgumentNullException();

            double maxPrice = (from item in _itemRepository.GetAll()
                               where item.Name.ToLower() == itemName.ToLower()
                               select item.Cost).Max();

            return maxPrice;
        }

        /// <summary>
        /// Gets a list of max prices grouped by item name
        /// </summary>
        /// <returns>An IEnumerable of the Items that have the max price</returns>
        public IEnumerable<Item> GetMaxPrices()
        {
            IEnumerable<Item> maxPrices = from item in _itemRepository.GetAll()
                                          group item by item.Name into g
                                          select new Item { Name = g.Key, Cost = g.Max(i => i.Cost) };

            return maxPrices;
        }
    }
}
