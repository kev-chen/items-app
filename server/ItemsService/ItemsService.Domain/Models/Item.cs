﻿using System;
namespace ItemsService.Domain.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string ItemName { get; set; }
        public decimal Cost { get; set; }
    }
}
