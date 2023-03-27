import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoHandlerC from '../Handler/PhotoHandlerC';
import { Link } from 'react-router-dom';
import '../styles/SeePhoto.css'
import '../../src/index.css'
import * as React from 'react';



export default function SeePgoto() {
  const {id} = useParams();
  const [photo, setPhoto] = useState([null])

  useEffect(() => {
    async function fetchPhoto() {
      const photoData = await PhotoHandlerC.loadPhoto(id);
      setPhoto(photoData);
    }
    fetchPhoto();
  }, [id]);

  if (!photo) {
    return <div>Loading...</div>;
  }
  
  const { title, content, description }= photo;

  return (
    <div id="container">
        <div id="containerPhoto">
            <img id="imgPhoto" src={`data:image/jpg;base64,${content}`} alt={title}/>
        </div>
        <div id="containerInfo">
            <h4 id="titlePhoto">{title}</h4>
            <p id="descriptionPhoto">{description}</p>
            <Link to="/gallery" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
        </div>
    </div>

  )
  }