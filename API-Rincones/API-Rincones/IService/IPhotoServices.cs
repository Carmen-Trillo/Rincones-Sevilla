using Entities.Entities;
using Entities.SearchFilter;

namespace API_Rincones.IService
{
    public interface IPhotoServices
    {
        int InsertPhoto(PhotoItem photoItem);
        void UpdatePhoto(PhotoItem photoItem);
        void DeletePhoto(int id);
        List<PhotoItem> GetAllPhotos();
        List<PhotoItem> GetPhotosByFilter(PhotoFilter photoFilter);
    }
}
