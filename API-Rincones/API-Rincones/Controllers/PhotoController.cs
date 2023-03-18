using Microsoft.AspNetCore.Mvc;
using System.Security.Authentication;
using System.Xml.Linq;
using Entities.Entities;
using Entities.SearchFilter;
using API_Rincones.IService;

namespace API_Rincones.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class PhotoController : ControllerBase
    {
        private readonly ILogger<PhotoController> _logger;
        private readonly IPhotoServices _photoServices;
        public PhotoController(ILogger<PhotoController> logger, IPhotoServices photoService)
        {
            _logger = logger;
            _photoServices = photoService;
        }


        [HttpPost(Name = "InsertPhoto")]
        public int Post([FromBody] PhotoItem photoItem)
        {
            return _photoServices.InsertPhoto(photoItem);
        }

        [HttpGet(Name = "GetAllPhotos")]
        public List<PhotoItem> GetAllPhotos()
        {
            return _photoServices.GetAllPhotos();
        }

        [HttpGet(Name = "GetPhotosByFilter")]
        public List<PhotoItem> GetPhotosByFilter([FromBody] PhotoFilter photoFilter)
        {
            return _photoServices.GetPhotosByFilter(photoFilter);
        }

        [HttpPatch(Name = "UpdatePhoto")]
        public void Patch([FromBody] PhotoItem photoItem)
        {
            _photoServices.UpdatePhoto(photoItem);
        }

        [HttpDelete(Name = "DeletePhoto")]
        public void Delete([FromQuery] int id)
        {
            _photoServices.DeletePhoto(id);
        }

    }
}