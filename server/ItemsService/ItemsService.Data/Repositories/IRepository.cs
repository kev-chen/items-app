using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ItemsService.Data.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        TEntity GetById(int id);
        IEnumerable<TEntity> GetAll();
    }
}
