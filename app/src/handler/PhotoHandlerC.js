import PhotoServices from "../services/PhotoServices";

const PhotoHandler = {
    addPhoto(newPhoto) {

        const active = show === 'Sí' ? 1 : 0;
        const extension = format === 'jpg' ? 1 : 2;

    
        let photo = { 
            "title": newPhoto.title,
            "description": newPhoto.description,
            "img": newPhoto.picture,
            "insertDate": new Date(),
            "updateDate": new Date(),
            "show": newPhoto.show,
            "isActive": active,
            "fileExtension":extension,
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
            return;
        }

        const active = show === 'Sí' ? 1 : 0;
        const extension = format === 'jpg' ? 1 : 2;
        
        let updatedPhotoStructure = {
            "title": updatedPhoto.title,
            "description": updatedPhoto.description,
            "img": updatedPhoto.imageURL,
            "updateDate": new Date(),
            "show": updatedPhoto.show,
            "isActive": active,
            "fileExtension": extension,
            "id": ""
        }
        return PhotoServices.updatePhoto(id, updatedPhotoStructure);
    },
}

export default PhotoHandler;

