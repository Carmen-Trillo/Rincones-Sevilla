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

        public async Task<int> InsertPhoto(PhotoItem photoItem)
        {
            await _photoLogic.InsertPhoto(photoItem);
            return photoItem.Id;
        }

        public async Task<List<PhotoItem>> GetAllPhotos()
        {
            return await _photoLogic.GetAllPhotos();
        }

        public async Task<PhotoItem> GetPhotoById(int id)
        {
            return await _photoLogic.GetPhotoById(id);
        }

        public async Task<List<PhotoItem>> GetPhotosByFilter(PhotoFilter photoFilter)
        {
            return await _photoLogic.GetPhotosByFilter(photoFilter);
        }

        public async Task UpdatePhoto(PhotoItem photoItem)
        {
            await _photoLogic.UpdatePhoto(photoItem);
        }

        public async Task DeletePhoto(int id)
        {
            await _photoLogic.DeletePhoto(id);
        }
    }
}

