using System;
using System.Collections.Generic;
using ItemsService.Domain.Models;

namespace ItemsService.Service.Interfaces
{
    public interface IItemService
    {
        public IEnumerable<Item> GetMaxPrices();
        public double GetMaxPriceForItem(string itemName);
    }
}
