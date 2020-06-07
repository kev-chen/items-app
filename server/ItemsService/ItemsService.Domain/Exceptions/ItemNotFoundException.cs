using System;
using System.Globalization;

namespace ItemsService.Domain.Exceptions
{
    public class ItemNotFoundException : Exception
    {
        public ItemNotFoundException() : base() { }

        public ItemNotFoundException(string message) : base(message) { }

        public ItemNotFoundException(string message, params object[] args) : base(String.Format(CultureInfo.CurrentCulture, message, args))
        {

        }
    }
}
