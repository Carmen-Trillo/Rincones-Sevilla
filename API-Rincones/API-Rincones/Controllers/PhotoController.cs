﻿using Microsoft.AspNetCore.Mvc;
using System.Security.Authentication;
using System.Xml.Linq;
using Entities.Entities;
using Entities.SearchFilter;
using API_Rincones.IService;
using Microsoft.AspNetCore.Mvc.Filters;
using API.Enums;

namespace API_Rincones.Controllers
{
    [ApiController]
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
                var photoItem = new PhotoItem();
                photoItem.Id = 0;
                photoItem.Name = photoUploadModel.File.FileName;
                photoItem.Title = photoUploadModel.Title;
                photoItem.Description = photoUploadModel.Description;
                photoItem.InsertDate = DateTime.Now;
                photoItem.UpdateDate = DateTime.Now;
                photoItem.FileExtension = photoUploadModel.FileExtension;

                using (var stream = new MemoryStream())
                {
                    photoUploadModel.File.CopyTo(stream);
                    photoItem.Content = stream.ToArray();
                }

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
        //public void Patch([FromBody] PhotoItem photoitem, [FromForm] PhotoUploadModel photoUploadModel)
        //  {
        //var photoItem = new PhotoItem();
        //photoItem.Id = 0;
        //photoItem.Name = photoUploadModel.File.FileName;
        //photoItem.Title = photoUploadModel.Title;
        //photoItem.Description = photoUploadModel.Description;
        //photoItem.InsertDate = DateTime.Now;
        //photoItem.UpdateDate = DateTime.Now;
        // photoItem.FileExtension = photoUploadModel.FileExtension;

        //using (var stream = new MemoryStream())
        //{
        //photoUploadModel.File.CopyTo(stream);
        //photoItem.Content = stream.ToArray();
        //}

        //_photoServices.UpdatePhoto(photoItem);
        //

        public void Patch(int id, [FromForm] PhotoUploadModel photoUploadModel)
        {
            var photoItem = _photoServices.GetPhotoById(id);

            photoItem.Title = photoUploadModel.Title;
            photoItem.Description = photoUploadModel.Description;
            photoItem.UpdateDate = DateTime.Now;

            if (photoUploadModel.File != null)
            {
                photoItem.Name = photoUploadModel.File.FileName;
                photoItem.FileExtension = (FileExtensionEnum)Enum.Parse(typeof(FileExtensionEnum), Path.GetExtension(photoUploadModel.File.FileName).Substring(1), true);

                using (var stream = new MemoryStream())
                {
                    photoUploadModel.File.CopyTo(stream);
                    photoItem.Content = stream.ToArray();
                }
            }

            _photoServices.UpdatePhoto(photoItem);
        }

        [HttpDelete(Name = "DeletePhoto")]
            public void Delete([FromQuery] int id)
            {
                _photoServices.DeletePhoto(id);
            }

    }
}