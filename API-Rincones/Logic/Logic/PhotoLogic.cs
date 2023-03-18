using Data;
using Entities.Entities;
using Entities.SearchFilter;
using Logic.ILogic;
using Logic.Logic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Logic.Logic
{
    public class PhotoLogic : IPhotoLogic
    {
        private readonly ServiceContext _serviceContext;
        public PhotoLogic(ServiceContext serviceContext)
        {
            _serviceContext = serviceContext;
        }

        public void DeletePhoto(int id)
        {
            var photoToDelete = _serviceContext.Set<PhotoItem>()
            .Where(u => u.Id == id).First();

            photoToDelete.IsActive = false;

            _serviceContext.SaveChanges();
        }

        public List<PhotoItem> GetAllPhotos()
        {
            return _serviceContext.Set<PhotoItem>().ToList();
        }

        public List<PhotoItem> GetPhotosByFilter(PhotoFilter photoFilter)
        {
            var resultList = _serviceContext.Set<PhotoItem>()
                        .Where(u => u.IsActive == true);

            if (photoFilter.InsertDateFrom != null)
            {
                resultList = resultList.Where(u => u.InsertDate > photoFilter.InsertDateFrom);
            }

            if (photoFilter.InsertDateTo != null)
            {
                resultList = resultList.Where(u => u.InsertDate < photoFilter.InsertDateTo);
            }

            return resultList.ToList();
        }

        public int InsertPhoto(PhotoItem photoItem)
        {
            _serviceContext.Photos.Add(photoItem);
            _serviceContext.SaveChanges();
            return photoItem.Id;
        }

        public void UpdatePhoto(PhotoItem photoItem)
        {
            _serviceContext.Photos.Update(photoItem);
            _serviceContext.SaveChanges();
        }
    }
}


