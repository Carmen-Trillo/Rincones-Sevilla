import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Ver from '../assets/img/ver.png';
import Editar from '../assets/img/editar.png';
import Eliminar from '../assets/img/eliminar.png';


export default function Dashboard() {
    const { Photos } = useLoaderData();
    console.log(Photos);

    const [form, setForm] = useState(false);

    const handleClose = () => setForm(false);
    const handleShow = () => setForm(true);

    return (
        <div id="dashboard" style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}>
            {Photos.map((item) => (
                <div
                    key={item.id}
                    style={{
                        width: '15vw',
                        backgroundColor: 'white',
                        margin: '1vh 2vw',
                        borderRadius: '5px',
                        padding: '0.7vh 0.6vw',
                    }}
                >
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title style={{fontFamily:'Cream', marginTop: '0.7vh', fontSize: '24px'}}>
                                {item.title}
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body style={{ fontSize: '12px' }}>
                            <img
                                src={`data:image/jpg;base64,${item.content}`}
                                alt={item.title}
                                style={{ width: '12vw' }}
                            />
                            <p style={{margin: '1vh', height: '10vh', fontSize:'14px'}}>{item.description}</p>
                        </Modal.Body>

                        <Modal.Footer style={{marginBottom:'0.8vh'}}>
                            <Button style={{width:'2vw', height: '4.5vh', padding: '0.2vw', margin: '0.2vw'}} onClick={handleShow} variant="outline-light"><img src={Ver} style={{width:'1.2vw'}} alt="ver foto"/></Button>
                            <Button style={{width:'2vw', height: '4.5vh', padding: '0.2vw', margin: '0.2vw'}} onClick={handleShow} variant="outline-light"><img src={Editar} style={{width:'1.2vw'}} alt="ver foto"/></Button>
                            <Button style={{width:'2vw', height: '4.5vh', padding: '0.2vw', margin: '0.2vw'}} variant="outline-light"><img src={Eliminar} style={{width:'1.2vw'}} alt="ver foto"/></Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            ))}
        </div>
    );
}
