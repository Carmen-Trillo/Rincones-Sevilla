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
        int InsertPhoto(PhotoItem photoItem);
        void UpdatePhoto(PhotoItem photoItem);
        void DeletePhoto(int id);
        List<PhotoItem> GetAllPhotos();
        PhotoItem GetPhotoById(int id);
        List<PhotoItem> GetPhotosByFilter(PhotoFilter photoFilter);
    }
}

