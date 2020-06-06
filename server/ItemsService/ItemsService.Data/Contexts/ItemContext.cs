using System;
using ItemsService.Domain.Maps;
using ItemsService.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace ItemsService.Data.Contexts
{
    public class ItemContext : DbContext
    {
        public ItemContext(DbContextOptions<ItemContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new ItemMap(modelBuilder.Entity<Item>());
        }
    }
}
