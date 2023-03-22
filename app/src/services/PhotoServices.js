import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7125/Photo',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const PhotoServices = {
    async getPhotos() {
        let response = await apiClient.get("/GetAllPhotos");
        let allPhotos = response.data;
        return allPhotos;
    },
    async getPhoto(id) {
        let response = await apiClient.get(`/GetPhotosById?id=${id}`);
        let photo = response.data;
        return photo;
    },
    async submitPhoto(newPhoto){
        try {
           const response = await apiClient.post("/InsertPhotoFront", newPhoto);
           return response.data;
        } catch (error) {
           console.error(error);
        }
     },
    async deletePhoto(id){
        await apiClient.delete(`/Delete?id=${id}`)
    },
    async updatePhoto(id, updatedPhoto){
        await apiClient.patch(`/UpdatePhotoFront?id=${id}`, updatedPhoto)
    }
}

export default PhotoServices;