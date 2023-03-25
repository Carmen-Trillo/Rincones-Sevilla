import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoHandler from '../Handler/PhotoHandler';
import { Link } from 'react-router-dom';
import '../styles/SeePhoto.css'
import '../../src/index.css'
import * as React from 'react';



export default function SeePgoto() {
  const {id} = useParams();
  const [photo, setPhoto] = useState([null])

  useEffect(() => {
    async function fetchPhoto() {
      const photoData = await PhotoHandler.loadPhoto(id);
      setPhoto(photoData);
    }
    fetchPhoto();
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }
  
  const { title, img }= photo;

  return (
    <div id="container">
        <div id="containerPhoto">
            <h4 id="titlePhoto">{title}</h4>
            <img id="imgPhoto" src={img} alt={title}/>
        </div>
        <div>
            <Link to="/gallery" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
        </div>
    </div>

  )
  }