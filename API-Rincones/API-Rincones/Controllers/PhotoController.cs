using Microsoft.AspNetCore.Mvc;
using System.Security.Authentication;
using System.Xml.Linq;
using Entities.Entities;
using Entities.SearchFilter;
using API_Rincones.IService;
using Microsoft.AspNetCore.Mvc.Filters;
using API.Enums;
using System.Web.Http.Cors;
using System.Text;

namespace API_Rincones.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Route("[controller]/[action]")]
    public class PhotoController : ControllerBase
    {
        private readonly ILogger<PhotoController> _logger;
        private readonly IPhotoServices _photoServices;
        public PhotoController(ILogger<PhotoController> logger, IPhotoServices photoServices)
        {
            _logger = logger;
            _photoServices = photoServices;
        }

        [HttpPost(Name = "InsertPhoto")]
        public int InsertPhoto([FromForm] PhotoUploadModel photoUploadModel)
        {
            var photoItem = new PhotoItem
            {
                Id = 0,
                Name = photoUploadModel.File.FileName,
                Title = photoUploadModel.Title,
                Description = photoUploadModel.Description,
                InsertDate = DateTime.Now,
                UpdateDate = DateTime.Now,
                FileExtension = photoUploadModel.FileExtension,
                IsActive = photoUploadModel.IsActive
            };

            // Convert the image content to a byte array
            using (var stream = new MemoryStream())
            {
                photoUploadModel.File.CopyTo(stream);
                byte[] bytes = stream.ToArray();
                photoItem.Content = Convert.ToBase64String(bytes);
            }


            return _photoServices.InsertPhoto(photoItem);
        }


        [HttpGet(Name = "GetAllPhotos")]
            public List<PhotoItem> GetAllPhotos()
            {
                return _photoServices.GetAllPhotos();
            }

        [HttpGet(Name = "GetPhotosById")]
        public PhotoItem GetPhotosById(int id)
        {
            return _photoServices.GetPhotoById(id);
        }

        [HttpGet(Name = "GetPhotosByFilter")]
        public List<PhotoItem> GetPhotosByFilter([FromQuery] PhotoFilter photoFilter)
        {
            return _photoServices.GetPhotosByFilter(photoFilter);
        }

        [HttpPatch(Name = "UpdatePhoto")]
        public void Patch(int id, [FromForm] PhotoUploadModel photoUploadModel)
        {
            var photoItem = _photoServices.GetPhotoById(id);

            photoItem.Title = photoUploadModel.Title;
            photoItem.Description = photoUploadModel.Description;
            photoItem.IsActive = photoUploadModel.IsActive;
            photoItem.UpdateDate = DateTime.Now;
            if (photoUploadModel.File != null)
            {
                photoItem.Name = photoUploadModel.File.FileName;
                photoItem.FileExtension = (FileExtensionEnum)Enum.Parse(typeof(FileExtensionEnum), Path.GetExtension(photoUploadModel.File.FileName).Substring(1), true);
                using (var stream = new MemoryStream())
                {
                    photoUploadModel.File.CopyTo(stream);
                    byte[] bytes = stream.ToArray();
                    photoItem.Content = Convert.ToBase64String(bytes);
                }

            }

            _photoServices.InsertPhoto(photoItem);
        }


        [HttpDelete(Name = "DeletePhoto")]
        public void Delete([FromQuery] int id)
            {
                _photoServices.DeletePhoto(id);
            }

    }
}