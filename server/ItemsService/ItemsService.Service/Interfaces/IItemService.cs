using System;
using System.Collections.Generic;
using ItemsService.Domain.BindingModels;
using ItemsService.Domain.Models;

namespace ItemsService.Service.Interfaces
{
    public interface IItemService
    {
        IEnumerable<object> GetMaxPrices();
        decimal GetMaxPriceForItem(string itemName);
        IEnumerable<Item> GetAllItems();
        Item GetById(int id);
        Item CreateItem(Item item);
        Item UpdateItem(UpdateItemBindingModel item);
        void DeleteItem(int id);
    }
}
