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
        private readonly ItemContext _context;
        private readonly DbSet<Item> _entities;

        public ItemRepository(ItemContext itemContext)
        {
            _context = itemContext;
            _entities = _context.Set<Item>();
        }

        public IEnumerable<Item> GetAll()
        {
            return _entities.AsEnumerable();
        }

        public Item GetById(int id)
        {
            return _entities.Find(id);
        }
    }
}
