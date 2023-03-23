import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import PhotoHandler from '../handler/PhotoHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import '../../src/index.css'
import '../styles/Form.css'

export default function EditPhoto() {
    // const { Photos } = useLoaderData();

    const {id} = useParams();
    const [photos, setPhotos] = useState({});

  useEffect(() => {
    async function fetchPhoto() {
      const photoData = await PhotoHandler.loadPhoto(id);
      setPhotos(photoData);
    }
    fetchPhoto();
  }, [id]);

    const [title, setTitle] = useState(photos.title);
    const [img, setImg] = useState(photos.img);
    const [description, setDescription] = useState(photos.description);
    const [show, SetShow] = useState(photos.show);

    const handleImageChange = (event) => {
      const picture = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImg(reader.result);
      };
      reader.readAsDataURL(picture);
      console.log(picture)
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
        SetShow(showInput);
    };
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      let updatedPhoto = { title, img, description, show };
      try {
        await PhotoHandler.updatePhoto(id, updatedPhoto);
        setAlertVariant("success");
      } catch (error) {
        setAlertVariant("danger");
        setAlertMessage(error.message);
      }
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

        <fieldset>
        <input id="picture" placeholder='Foto del producto' type="file" onChange={handleImageChange} />
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

