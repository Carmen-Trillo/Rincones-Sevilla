import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoHandler from '../handler/PhotoHandler';
import PhotoServices from '../services/PhotoServices'
import { Link } from 'react-router-dom';

export default function PhotoList() {
    const [photo, setPhoto] = useState([photo]);

    useEffect(() => {
        getAllPhotos();
    }, []);

    const getAllPhotos = async () => {
        const data = await PhotoHandler.loadPhotos();
        setPhoto(data);
      };

  return (
    <>
    <div id="container">
        {
        photo.map((photo) =>
            <div key={photo.id}>
            <h1>{photo.Title}</h1>
            <p>{photo.Description}</p>
            <img src={photo.Content} alt={photo.Title} />
             </div>
            )
        }
    </div>
    </>
  );
};
