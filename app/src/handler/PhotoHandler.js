import PhotoServices from "../services/PhotoServices";

const PhotoHandler = {
    addPhoto(newPhoto){
        if (!newPhoto) {
            return;
        }

        let Photo = {
            "Name": "",
            "Title": newPhoto.title,
            "Description": newPhoto.description,
            "Content": "",
            "InsertDate": new Date(),
            "UpdateDate": new Date(),
            "IsActive": newPhoto.show,
            "FileExtension": newPhoto.extension,
            "id": ""
        }
        return PhotoServices.submitPhoto(Photo);
    },
    loadPhotos(){
        return PhotoServices.getPhotos();
    },
    loadPhoto(id) {
        return PhotoServices.getPhoto(id);
    },
    deletePhoto(id){
        return PhotoServices.deletePhoto(id);
    },
    updatePhoto(id, updatedPhoto){
        if (!updatedPhoto) {
            return;
        }
        let updatedPhotoStructure = {
            "Name": "",
            "Title": newPhoto.title,
            "Description": newPhoto.description,
            "Content": "",
            "UpdateDate": new Date(),
            "IsActive": newPhoto.show,
            "FileExtension": newPhoto.extension,
            "id": ""
        }
        return PhotoServices.updatePhoto(id, updatedPhotoStructure);
    },
}

export default PhotoHandler;

