import { useForm } from 'react-hook-form';
import React, { useState, useRef } from 'react';
import Alert from 'react-bootstrap/Alert';
import PhotoHandler from '../handler/PhotoHandler';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../../src/index.css';
import '../styles/Form.css';

function MyForm() {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);

  const handleImageChange = (event) => {
    const picture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => {
      setValue("picture", reader.result);
    };
  }

  const handleAddClick = () => {
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    reset(); // Borra los datos del formulario
  };

  const onSubmit = async (data) => {
    console.log("ësto es data desde newphoto", data)
    const response = await PhotoHandler.addPhoto(data);
    console.log(response);
    setShowAlert(true);
    formRef.current.reset();
  };

  const [alertVariant, setAlertVariant] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  return (
    <div id='container'>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="form">
        <fieldset>
          <label htmlFor="title">Título de la foto</label>
          <input id="title" {...register("title", { required: true })} />
          {errors.title && <span>Debe rellenar este campo</span>}

          <label htmlFor="description">Descripción de la foto</label>
          <input id="description" {...register("description", { required: true })} />
          {errors.description && <span>Debe rellenar este campo</span>}

          <label htmlFor="show">¿Deseas publicar la foto?</label>
          <select id="show" name="show" {...register("show", { required: true })}>
            <option value="selecciona">selecciona...</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
          {errors.show && <span>Debe rellenar este campo</span>}

          <fieldset>
            <input id="picture" placeholder='Foto del producto' type="file" onChange={handleImageChange} />
            {errors.picture && <span>Debe rellenar este campo</span>}
          </fieldset>

        </fieldset>

        <div id="buttons">
          <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
          <Link to="/" style={{textDecoration:'none'}}><input id="return" type="button" value="VOLVER" /></Link>
        </div>
      <Alert show={showAlert} variant={alertVariant} onClose={handleAlertClose} dismissible>
        <Alert.Heading style={{ color: 'white', textAlign: 'center' }}>{alertVariant === 'success' ? 'Foto añadida a la base de datos' : 'Error'}</Alert.Heading>
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


export default MyForm