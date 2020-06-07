using System;
namespace ItemsService.Domain.BindingModels
{
    public class UpdateItemBindingModel
    {
        public int? Id { get; set; }
        public string ItemName { get; set; }
        public decimal? Cost { get; set; }
    }
}