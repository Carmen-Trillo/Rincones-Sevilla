import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import PhotoList from "../pages/PhotoList";
import Landing from "../pages/Landing";
import NewPhoto from "../pages/NewPhoto";
import EditPhoto from "../pages/EditPhoto";
import Contact from "../pages/Contact";
import SeePhoto from "../pages/SeePhoto";
import PhotoHandlerC from '../handler/PhotoHandlerC';


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
                        path: '/editPhoto/:id',
                        element: <EditPhoto />,
                        loader: fetchPhoto,
                    },
                    {
                        path: '/SeePhoto/:id',
                        element: <SeePhoto />,
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
    const Photos = await PhotoHandlerC.loadPhotos();
    return { Photos };
}

async function fetchPhoto({ params }) {
    const Photo = await PhotoHandlerC.loadPhoto(params.id);
    return { Photo };
}
