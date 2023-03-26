import PhotoServicesC from "../services/PhotoServicesC";

const PhotoHandlerC = {
    addPhoto(newPhoto) {

        const active = show === 'Sí' ? 0 : 1;
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

        const active = show === 'Sí' ? 1 : 0;
        const extension = format === 'jpg' ? 1 : 2;
        
        let updatedPhotoStructure = {
            "Title": updatedPhoto.title,
            "Description": updatedPhoto.description,
            "Content": updatedPhoto.imageURL,
            "UpdateDate": new Date(),
            "IsActive": active,
            "FileExtension": extension,
        }
        return PhotoServicesC.updatePhoto(id, updatedPhotoStructure);
    },
}

export default PhotoHandlerC;

