import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import PhotoHandlerC from '../handler/PhotoHandlerC';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import '../../src/index.css'
import '../styles/Form.css'

export default function EditPhoto() {
    const {id} = useParams();
    const [photos, setPhotos] = useState({});

  useEffect(() => {
    async function fetchPhoto() {
      const photoData = await PhotoHandlerC.loadPhoto(id);
      setPhotos(photoData);
    }
    fetchPhoto();
  }, [id]);

    const [title, setTitle] = useState(photos.title || '');
    const [content, setContent] = useState(photos.content || '');
    const [description, setDescription] = useState(photos.description || '');
    const [show, setShow] = useState(photos.show || '');
    const [format, setFormat] = useState(photos.format || '');

  useEffect(() => {
    
    if (title === '') {
      setTitle(photos.title || '');
    }
    if (content === '') {
      setContent(photos.content || '');
    }
    if (description === '') {
      setDescription(photos.description || '');
    }
    if (show === '') {
      setShow(photos.isActive || '');
    }
    if (format === '') {
      setFormat(photos.fileExtension || '');
    }
  }, [photos.id, photos.title, photos.content, photos.description, photos.show, photos.format]);


    const handleImageChange = (event) => {
      const picture = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(picture);
      console.log(picture)
      reader.onload = () => {
        const base64String = reader.result.split(",")[1]; // Obtener la cadena base64 sin la cabecera
        console.log("ësto es el readeeeeeeeer", base64String);
        setContent(base64String);
        };console.log(picture)
      };
    
            

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };

    const handleShowChange = (event) => {
        let showInput = event.target.value;
        setShow(showInput);
    };

    const handleFormatChange = (event) => {
      let formatInput = event.target.value;
      setFormat(formatInput);
  };
    
      const handleSubmit = async (event) => {
      event.preventDefault();
        
      const updatedPhoto = { id, title, description, show, format, content };
      console.log(updatedPhoto)

      

      await PhotoHandlerC.updatePhoto(id, updatedPhoto);
      setShowAlert(true);
    };

    const [showAlert, setShowAlert] = useState(false);

    const handleAddClick = () => {
        setShowAlert(true);
    }

    const handleAlertClose = () => {
        setShowAlert(false);
    }

    const [view, setView] = useState(false);

    const handleClose = () => setView(false);
    const handleView = () => setView(true);

    const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

    if (!photos) {
        return <div>Loading...</div>;
      }

  return (
    <div id='container'>
    <form onSubmit={handleSubmit} className="form">
      <fieldset>
        <label for="title">Título de la foto</label>
        <input onChange={handleTitleChange} placeholder={photos.title} id="title"  />

        <label for="description">Descripción de la foto</label>
        <input onChange={handleDescriptionChange} placeholder={photos.description} id="description" />

        <label for="show">¿Deseas publicar la foto?</label>
        <select onChange={handleShowChange} placeholder={photos.show} id="show" name="show" >
        <option value="selecciona">selecciona...</option>
        <option value="sí">Sí</option>
        <option value="no">No</option>
        </select>

        <label htmlFor="format">¿Qué extensión tiene la foto?</label>
          <select onChange={handleFormatChange} id="format" name="format" placeholder={photos.extension}>
            <option value="selecciona">selecciona...</option>
            <option value="jpg">jpg</option>
            <option value="png">png</option>
          </select>

        <fieldset>
        <label htmlFor="content">Foto de Sevilla</label>
        <input id="content" placeholder='Foto del producto' type="file" onChange={handleImageChange} />
        </fieldset>
          

      </fieldset>
            <div id='buttons' style={{display:'flex', flexDirection: 'row'}}>
                <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
                <Link to="/gallery" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
            </div>

            <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} dismissible>
        <Alert.Heading style={{ color: 'white', textAlign: 'center' }}>{alertVariant === 'success' ? 'Foto actualizada en la base de datos' : 'Error'}</Alert.Heading>
        <p style={{ color: 'white' }}>
          {alertMessage}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button style={{ height: '4vh', fontFamily: 'Jmh', width: '5vw' }} onClick={handleAlertClose} variant="outline-success">
            Cerrar
          </Button>
        </div>
        
      </Alert>
    </form>
   </div>
  )

}