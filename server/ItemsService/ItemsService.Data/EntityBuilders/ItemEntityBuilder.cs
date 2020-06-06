using System;
using ItemsService.Domain.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace ItemsService.Data.EntityBuilders
{
    public class ItemEntityBuilder
    {
        public ItemEntityBuilder(EntityTypeBuilder<Item> entityBuilder)
        {
            entityBuilder.HasKey(i => i.Id);
            entityBuilder.Property(i => i.ItemName).IsRequired();
            entityBuilder.Property(i => i.Cost).IsRequired().HasColumnType("numeric(18,2)");
        }
    }
}
