// import { useState, useEffect } from "react";
// import Modal from 'react-bootstrap/Modal';
// import PhotoHandler from '../handler/PhotoHandler';
// import { useParams } from 'react-router-dom';


// export default function SeePhoto() {
//   const {id} = useParams();
//   const [photo, setPhoto] = useState([null])

//   useEffect(() => {
//     async function fetchPhoto() {
//       const photoData = await PhotoHandler.loadPhoto(id);
//       setPhoto(photoData);
//     }
//     fetchPhoto();
//   }, [id]);

//   const { title, img }= photo;


//   const [showModal, setShowModal] = useState(false);

//   const handleClick = () => {
//     setShowModal(true);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}></button>
//       {showModal && (
//         <Modal>
//           <h2 id='modalTitle'>{title.id}</h2>
//           <img src={img.id} alt={title.id} />
//         </Modal>
//       )}
//     </div>
//   );
// }

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";




const SeePhoto = ({ show, handleClose }) => {

  const {id} = useParams();
  const [photo, setPhoto] = useState([null])
  console.log(photo)


  useEffect(() => {
  async function fetchPhoto() {
  const photoData = await PhotoHandler.loadPhoto(id);
  setPhoto(photoData);
  }
  fetchPhoto();
  }, [id]);

  const { title, img }= photo;

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="PhotoTitle"> {title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <Card className="text-center" style={{ width: '90%'}} border="light">
                        <Card.Img variant="top" src={img} />
                  </Card>
                  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>)
};

export default SeePhoto;