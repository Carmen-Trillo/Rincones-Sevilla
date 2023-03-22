import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import PhotoHandler from '../handler/PhotoHandler';
import Button from 'react-bootstrap/Button';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../../src/index.css'
import '../styles/Form.css'

export default function EditPhoto() {
    // const { Photos } = useLoaderData();

    const {id} = useParams();
    const [Photos, setPhotos] = useState([null])

  useEffect(() => {
    async function fetchPhoto() {
      const photoData = await PhotoHandler.loadPhoto(id);
      setPhotos(photoData);
    }
    fetchPhoto();
  }, [id]);

    const [title, setTitle] = useState(Photos.title);
    const [content, setContent] = useState(Photos.content);
    const [description, setDescription] = useState(Photos.description);
    const [isActive, SetIsActive] = useState(Photos.isActive)
    const [fileExtension, SetFileExtension] = useState(Photos.fileExtension)

    const formRef = useRef(null);

    const handleImgChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setContent(reader.result);
        };
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };

    const handleIsActiveChange = (event) => {
        let isActiveInput = event.target.value;
        SetIsActive(isActiveInput);
    };
    const handleFileExtensionChange = (event) => {
        let fileExtensionInput = event.target.value;
        SetFileExtension(fileExtensionInput);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedPhoto = { title, content, description, isActive, fileExtension};
        PhotoHandler.updatePhoto(id, updatedPhoto);
    };

    const [showAlert, setShowAlert] = useState(false);

    const handleAddClick = () => {
        formRef.current.reset();
        setShowAlert(true);
    }

    const handleAlertClose = () => {
        setShowAlert(false);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (!Photos) {
        return <div>Loading...</div>;
      }

  return (
    <div id='container'>
    <form onSubmit={handleSubmit} className="form">
      <fieldset>
        <label for="title">Título de la foto</label>
        <input onChange={handleTitleChange} placeholder={Photos.title} id="title"  />

        <label for="description">Descripción de la foto</label>
        <input onChange={handleDescriptionChange} placeholder={Photos.description} id="description" />

        <label for="show">¿Deseas publicar la foto?</label>
        <select onChange={handleIsActiveChange} placeholder={Photos.isActive} id="show" name="show" >
        <option value="selecciona">selecciona...</option>
        <option value="sí">Sí</option>
        <option value="no">No</option>
        </select>

        <label for="show">Formato de la foto</label>
        <select onChange={handleFileExtensionChange} placeholder={Photos.fileExtension} id="format" name="format" >
        <option value="selecciona">selecciona...</option>
        <option value="jpg">jpg</option>
        <option value="png">png</option>
        </select>

        <fieldset>
          <input id="picture" placeholder='Foto del producto' type="file" onChange={handleImgChange} />
        </fieldset>

      </fieldset>
            <div style={{display:'flex', flexDirection: 'row'}}>
                <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
                <Link to="/gallery" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
            </div>

      <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        <Alert.Heading style={{color: 'white', textAlign:'center'}}>Foto editada en la base de datos</Alert.Heading>
        <p style={{color: 'white'}}>
          ¡Sigamos disfrutando de Sevilla!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button id="reset" type="reset" style={{height: '4vh', fontFamily: 'Jmh', width: '5vw'}} onClick={handleAlertClose} variant="outline-success">
            Cerrar
          </Button>
        </div>
      </Alert>
    </form>
   </div>
  )

}

