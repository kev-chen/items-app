using System;
using System.Linq;
using System.Collections.Generic;
using ItemsService.Data.Repositories;
using ItemsService.Domain.Models;
using ItemsService.Service.Interfaces;
using ItemsService.Domain.BindingModels;
using ItemsService.Domain.Exceptions;

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
        public decimal GetMaxPriceForItem(string itemName)
        {
            if (string.IsNullOrWhiteSpace(itemName)) throw new ArgumentNullException();

            decimal maxPrice = (from item in _itemRepository.GetAll()
                               where item.ItemName.ToLower() == itemName.ToLower()
                               select item.Cost).Max();

            return maxPrice;
        }

        /// <summary>
        /// Gets a list of max prices grouped by item name
        /// </summary>
        /// <returns>An IEnumerable of the Items that have the max price</returns>
        public IEnumerable<object> GetMaxPrices()
        {
            IEnumerable<object> maxPrices = from item in _itemRepository.GetAll()
                                          group item by item.ItemName into g
                                          select new { ItemName = g.Key, Cost = g.Max(i => i.Cost) };

            return maxPrices;
        }

        public Item GetById(int id)
        {
            return _itemRepository.GetById(id);
        }

        public IEnumerable<Item> GetAllItems()
        {
            return _itemRepository.GetAll();
        }

        public Item CreateItem(Item item)
        {
            if (string.IsNullOrWhiteSpace(item.ItemName)) throw new AppException("ItemName is required");

            _itemRepository.Create(item);
            return item;
        }

        public void DeleteItem(int id)
        {
            _itemRepository.Delete(id);
        }

        public Item UpdateItem(UpdateItemBindingModel item)
        {
            Item existingItem = _itemRepository.GetById(item.Id.Value);
            Item updatedItem = new Item()
            {
                Id = item.Id.Value,
                ItemName = item.ItemName ?? existingItem.ItemName,
                Cost = item.Cost ?? existingItem.Cost
            };

            return _itemRepository.Update(updatedItem);
        }
    }
}
