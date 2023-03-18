using API_Rincones.IService;
using Entities.Entities;
using Entities.SearchFilter;
using Logic.ILogic;
using Logic.Logic;

namespace API_Rincones.Services
{
    public class PhotoServices : IPhotoServices
    {
        private readonly IPhotoLogic _photoLogic;
        public PhotoServices(IPhotoLogic photoLogic)
        {
            _photoLogic = photoLogic;
        }
        public int InsertPhoto(PhotoItem photoItem)
        {
            _photoLogic.InsertPhoto(photoItem);
            return photoItem.Id;
        }
        public List<PhotoItem> GetAllPhotos()
        {
            return _photoLogic.GetAllPhotos();
        }
        public List<PhotoItem> GetPhotosByFilter(PhotoFilter photoFilter)
        {
            return _photoLogic.GetPhotosByFilter(photoFilter);
        }

        public void UpdatePhoto(PhotoItem photoItem)
        {
            _photoLogic.UpdatePhoto(photoItem);
        }

        public void DeletePhoto(int id)
        {
            _photoLogic.DeletePhoto(id);
        }
    }
}
