import PhotoHandler from '../src/handler/PhotoHandler';
import PhotoService from '../src/services/PhotoServices';


jest.mock('../src/services/PhotoService');

    /* describe('loadPhotos', () => {
        it('should return the photos using the photo service', async () => {
            const expectedPhotos = [{
                "title": "Mi callejón del agua",
                "img": "../src/assets/img/callejonAgua.jpg",
                "description": "Qué bonitas las noches de Sevilla",
                "date": "2023-04-10",
                "id": 1
              }];
            PhotoService.getPhotos.mockResolvedValue(expectedPhotos);
            let result = await PhotoHandler.loadPhotos();
            expect(result).toEqual(expectedPhotos);
            expect(PhotoService.getPhotos).toHaveBeenCalled();
        });
    }) */

    describe('loadPhoto', () => {
        it('should return the photo using the photo service', async () => {
            const id = 1;
            const expectPhoto = [{
                "title": "Patio de las Muñecas",
                "description": "Cuando el Alcázar se vacía y nos lo entrega todo",
                "img": "../src/assets/img/patioMunecas.jpg",
                "insertDate": "2023-03-22T22:08:36.619Z",
                "updateDate": "2023-03-22T22:08:36.619Z",
                "show": "Sí",
                "id": 1,
              }];
            PhotoService.getPhoto.mockResolvedValue(expectPhoto);
            const result = await PhotoHandler.loadPhoto(id);
            expect(result).toEqual(expectPhoto);
            expect(PhotoService.getPhoto).toHaveBeenCalledWith(id);
        });
    }) 
