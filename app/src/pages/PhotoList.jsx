import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Ver from '../assets/img/ver.png';
import Editar from '../assets/img/editar.png';
import Eliminar from '../assets/img/eliminar.png';
import { Link } from "react-router-dom";
import EditPhoto from './EditPhoto';
import PhotoPagination from "../components/PhotoPagination";
import PhotoHandler from '../handler/PhotoHandler';
import '../../src/index.css';
import '../styles/PhotoList.css';

export default function Dashboard() {

    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        getData();
      }, []);

    const getData = async () => {
        const data = await PhotoHandler.loadPhotos();
        setPhotos(data);
      };

      const deleteShort = async (id) => {
        setProducts(products.filter((p) => p.id !== id));
        await ProductHandler.deleteProduct(id);
      };

    console.log(photos)

    if (photos.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div id="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}>
            
            {photos.map((item) => (
                // {item.Public === "Sí" &&(
                <div id='card'
                    key={item.id}
                    style={{
                        width: '15vw',
                        backgroundColor: 'white',
                        margin: '1vh 2vw',
                        borderRadius: '5px',
                        padding: '0.5vh 0.6vw',
                        height: '62vh',
                    }}
                >
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title style={{fontFamily:'Cream', fontSize: '24px', padding:'1vh'}}>
                                {item.title}
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body style={{ fontSize: '12px' }}>
                            <img
                                src={item.img}
                                alt={item.title}
                                style={{ width: '12vw' }}
                            />
                            <p style={{margin: '1vh', height: '10vh', fontSize:'14px'}}>{item.description}</p>
                        </Modal.Body>

                        <Modal.Footer style={{marginBottom:'0.8vh'}}>
                            <Button style={{width:'2vw', height: '4.5vh', padding: '0.2vw', margin: '0.2vw'}} variant="outline-light"><img src={Ver} style={{width:'1.2vw'}} alt="ver foto"/></Button>
                            
                            <Link to={`/EditPhoto/${item.id}`}>
                                <Button style={{width:'2vw', height: '4.5vh', padding: '0.2vw', margin: '0.2vw'}} onClick={EditPhoto} variant="outline-light"><img src={Editar} style={{width:'1.2vw'}} alt="editar foto"/></Button>
                            </Link>

                            <Button onClick={() => deleteShort(item.id)} style={{width:'2vw', height: '4.5vh', padding: '0.2vw', margin: '0.2vw'}} variant="outline-light"><img src={Eliminar} style={{width:'1.2vw'}} alt="eliminar foto"/></Button>
                        </Modal.Footer>
                    </Modal.Dialog>

                </div>
               
                ))}
            </div>
            <div id='pagination' >
            <PhotoPagination />
            </div>
        </div>
    
    );
}

