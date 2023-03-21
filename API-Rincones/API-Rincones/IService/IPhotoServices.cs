using Entities.Entities;
using Entities.SearchFilter;

namespace API_Rincones.IService
{
    public interface IPhotoServices
    {
        Task<int> InsertPhoto(PhotoItem photoItem);
        Task UpdatePhoto(PhotoItem photoItem);
        Task DeletePhoto(int id);
        Task<List<PhotoItem>> GetAllPhotos();
        Task<PhotoItem> GetPhotoById(int id);
        Task<List<PhotoItem>> GetPhotosByFilter(PhotoFilter photoFilter);
    }
}
