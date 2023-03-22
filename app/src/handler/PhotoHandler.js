import PhotoServices from "../services/PhotoServices";

const PhotoHandler = {
    addPhoto(newPhoto) {
    
        let photo = { 
            "title": newPhoto.title,
            "description": newPhoto.description,
            "img": newPhoto.picture,
            "insertDate": new Date(),
            "updateDate": new Date(),
            "public": newPhoto.show,
        }
        console.log(photo)
        return PhotoServices.submitPhoto(photo);
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
        
        let updatedPhotoStructure = {
            "title": updatedPhoto.title,
            "description": updatedPhoto.description,
            "img": updatedPhoto.picture,
            "UpdateDate": new Date(),
            "public": updatedPhoto.show,
            "id": ""
        }
        return PhotoServices.updatePhoto(id, updatedPhotoStructure);
    },
}

export default PhotoHandler;

