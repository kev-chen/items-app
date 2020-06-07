using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ItemsService.Data.Contexts;
using ItemsService.Domain.Exceptions;
using ItemsService.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace ItemsService.Data.Repositories
{
    public class ItemRepository : IRepository<Item>
    {
        private readonly ItemContext _context;
        private readonly DbSet<Item> _entities;

        public ItemRepository(ItemContext itemContext)
        {
            _context = itemContext;
            _entities = _context.Set<Item>();
        }

        public Item Create(Item entity)
        {
            _entities.Add(entity);
            _context.SaveChanges();

            return entity;
        }

        public void Delete(int id)
        {
            Item item = _entities.Find(id);
            if (item == null) return;

            _entities.Remove(item);
            _context.SaveChanges();
        }

        public IEnumerable<Item> GetAll()
        {
            return _entities.AsEnumerable();
        }

        public Item GetById(int id)
        {
            return _entities.Find(id);
        }

        public Item Update(Item entity)
        {
            Item item = _entities.Find(entity.Id);

            if (item == null) throw new AppException("Item not found");

            // Update ItemName if changed
            if (!string.IsNullOrEmpty(entity.ItemName) && entity.ItemName!= item.ItemName)
                item.ItemName = entity.ItemName;

            // Update Cost if changed
            if (entity.Cost != item.Cost)
                item.Cost = entity.Cost;

            _context.Update(item);
            _context.SaveChanges();

            return item;
        }
    }
}
