using System;
using ItemsService.Domain.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ItemsService.Domain.Maps
{
    public class ItemMap
    {
        public ItemMap(EntityTypeBuilder<Item> entityBuilder)
        {
            entityBuilder.HasKey(i => i.Id);
            entityBuilder.Property(i => i.ItemName).IsRequired();
            entityBuilder.Property(i => i.Cost).IsRequired();
        }
    }
}
