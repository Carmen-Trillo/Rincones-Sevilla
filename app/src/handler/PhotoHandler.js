import PhotoServices from "../services/PhotoServices";

const PhotoHandler = {
    addPhoto(newPhoto) {
    
        let Photo = { 
            "Title": newPhoto.title,
            "Description": newPhoto.description,
            "Img": newPhoto.picture,
            "InsertDate": new Date(),
            "UpdateDate": new Date(),
            "Public": newPhoto.show,
        }
        console.log(Photo)
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
            console.log(updatedPhoto)
            return;
        }

        let isActive = 0;
        let fileExtension = "";
        if (updatedPhoto.show === "Sí") {
            isActive = 1;
        } else if (updatedPhoto.show === "No"){
            isActive = 0;
        }
        if (updatedPhoto.extension === "jpg") {
            fileExtension = "1";
        } else if (updatedPhoto.extension === "png") {
            fileExtension = "2";
        }

        let updatedPhotoStructure = {
            "Name": "",
            "Title": updatedPhoto.title,
            "Description": updatedPhoto.description,
            "Content": "",
            "UpdateDate": new Date(),
            "IsActive": isActive,
            "FileExtension": fileExtension,
            "id": ""
        }
        return PhotoServices.updatePhoto(id, updatedPhotoStructure);
    },
}

export default PhotoHandler;

