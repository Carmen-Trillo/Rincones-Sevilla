import PhotoServicesC from "../services/PhotoServicesC";

const PhotoHandlerC = {
    addPhoto(newPhoto) {

        const active = show === 'Sí' ? false : true;
        const extension = format === 'jpg' ? 2 : 1;

    
        let photo = { 
            "title": newPhoto.title,
            "description": newPhoto.description,
            "content": newPhoto.picture,
            "insertDate": new Date(),
            "updateDate": new Date(),
            "isActive": active,
            "fileExtension":extension,
        }
        console.log(photo)
        return PhotoServicesC.submitPhoto(photo);
    },
    loadPhotos(){
        return PhotoServicesC.getPhotos();
    },
    loadPhoto(id) {
        return PhotoServicesC.getPhoto(id);
    },
    deletePhoto(id){
        return PhotoServicesC.deletePhoto(id);
    },
    updatePhoto(id, updatedPhoto){
        if (!updatedPhoto) {
            return;
        }

        const active = show === 'Sí' ? false : true;
        const extension = format === 'jpg' ? 2 : 1;
        
        let updatedPhotoStructure = {
            "title": updatedPhoto.title,
            "description": updatedPhoto.description,
            "content": updatedPhoto.content,
            "updateDate": new Date(),
            "isActive": active,
            "fileExtension": extension,
            "id": updatedPhoto.id
        }
        console.log(updatedPhotoStructure)

        return PhotoServicesC.updatePhoto(id, updatedPhotoStructure);
    },
}

export default PhotoHandlerC;

