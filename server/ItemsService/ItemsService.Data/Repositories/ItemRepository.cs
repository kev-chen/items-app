using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ItemsService.Data.Contexts;
using ItemsService.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace ItemsService.Data.Repositories
{
    public class ItemRepository : IRepository<Item>
    {
        // TEMPORARY DUMMY DATA - FOR DEVELOPMENT
        private IEnumerable<Item> _items = new List<Item>
        {
            new Item() { Id = 1, ItemName = "ITEM 1", Cost = 100 },
            new Item() { Id = 2, ItemName = "ITEM 2", Cost = 200 },
            new Item() { Id = 3, ItemName = "ITEM 1", Cost = 250 },
            new Item() { Id = 4, ItemName = "ITEM 3", Cost = 300 },
            new Item() { Id = 5, ItemName = "ITEM 4", Cost = 50 },
            new Item() { Id = 5, ItemName = "ITEM 4", Cost = 40 },
            new Item() { Id = 7, ItemName = "ITEM 2", Cost = 200 }
        };

        public ItemRepository()
        {
        }

        public IEnumerable<Item> GetAll()
        {
            return _items;
        }

        public Item GetById(int id)
        {
            return _items.SingleOrDefault(i => i.Id == id);
        }

    }
}
