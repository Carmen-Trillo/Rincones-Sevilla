using Entities.Entities;
using Entities.SearchFilter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.ILogic
{
    public interface IPhotoLogic
    {
        Task<int> InsertPhoto(PhotoItem photoItem);
        Task UpdatePhoto(PhotoItem photoItem);
        Task DeletePhoto(int id);
        Task<List<PhotoItem>> GetAllPhotos();
        Task<PhotoItem> GetPhotoById(int id);
        Task<List<PhotoItem>> GetPhotosByFilter(PhotoFilter photoFilter);
    }
}

