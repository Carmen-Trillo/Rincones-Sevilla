import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import PhotoList from "../pages/PhotoList";
import Landing from "../pages/Landing";
import NewPhoto from "../pages/NewPhoto";
import EditPhoto from "../pages/EditPhoto";
import Contact from "../pages/Contact";
import SeePhoto from '../pages/SeePhoto';
import PhotoHandler from '../handler/PhotoHandler';



export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
                    {
                        index: true,
                        element: <Landing />,
                    },
                    {
                        path: '/newPhoto',
                        element: <NewPhoto />,
                    },
                    {
                        path: '/gallery',
                        element: <PhotoList/>,
                        loader: fetchPhotos,
                    },
                    {
                        path: '/seePhoto/:id',
                        element: <SeePhoto/>,
                        loader: fetchPhoto,
                    },     
                    {
                        path: '/editPhoto/:id',
                        element: <EditPhoto />,
                        loader: fetchPhoto,
                    },
                    {
                        path: '/contact',
                        element: <Contact />,
                    },   
                ]
            },
        ]
);

async function fetchPhotos() {
    const Photos = await PhotoHandler.loadPhotos();
    return { Photos };
}

async function fetchPhoto({ params }) {
    const Photo = await PhotoHandler.loadPhoto(params.id);
    return { Photo };
}
