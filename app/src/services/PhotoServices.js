/* var baseURL = 'https://localhost:7125/Photo/'

const PhotoServices = { */
   /*  GetAllPhotos: async function () {
        return await fetch(baseURL + "GetAllPhotos")
            .then(res => res.json())
            .then(
                (result) => {
                    return result;
                },
                (error) => {
                    return error;
                }
            );} */
        // return await fetch(baseURL + "GetAll", {
        //     method: "GET",
        //     mode: "cors",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
/*     }
} */

    /* async getPhoto(id) {
        let response = await baseURL.get("/photos/" + id);
        let photo = response.data;
        return photo;
    },
    async submitPhoto(newPhoto){
        await baseURL.post("/photos", newPhoto)
    },
    async deletePhoto(id){
        await baseURL.delete("/photos/" + id)
    },
    async updatePhoto(id, updatedPhoto){
        await baseURL.patch("/photos/" + id, updatedPhoto)
    }*/

    
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:7125/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

const PhotoServices = {
    async getPhotos() {
        let response = await apiClient.get("Photo/GetAllPhotos/");
        let allPhotos = response.data;
        return allPhotos;
    },
    async getPhoto(id) {
        let response = await apiClient.get("Photo/GetPhotosById/" + id);
        let photo = response.data;
        return photo;
    },
    async submitPhoto(newPhoto){
        await apiClient.post("Photo/InsertPhoto", newPhoto)
    },
    async deletePhoto(id){
        await apiClient.delete("Photo/DeletePhoto/" + id)
    },
    async updatePhoto(id, updatedPhoto){
        await apiClient.patch("Photo/UpdatePhoto/" + id, updatedPhoto)
    }
}

export default PhotoServices;