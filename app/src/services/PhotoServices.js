import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const PhotoService = {
    async getPhotos() {
        let response = await apiClient.get("/photos");
        let allPhotos = response.data;
        return allPhotos;
    },
    async getPhoto(id) {
        let response = await apiClient.get("/photos/" + id);
        let photo = response.data;
        return photo;
    },
    async submitPhoto(newPhoto){
        await apiClient.post("/photos", newPhoto)
    },
    async deletePhoto(id){
        await apiClient.delete("/photos/" + id)
    },
    async updatePhoto(id, updatedPhoto){
        await apiClient.patch("/photos/" + id, updatedPhoto)
    }
}

export default PhotoService