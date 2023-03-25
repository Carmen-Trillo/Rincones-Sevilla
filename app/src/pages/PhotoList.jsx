import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Ver from '../assets/img/ver.png';
import Editar from '../assets/img/editar.png';
import Eliminar from '../assets/img/eliminar.png';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import EditPhoto from './EditPhoto';
import PhotoHandler from '../handler/PhotoHandler';
import ReactPaginate from "react-paginate";
import '../../src/index.css';
import '../styles/PhotoList.css';

export default function PhotoList() {
    const {id} = useParams();
    const [photos, setPhotos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const { title, img, description}= photos;

    useEffect(() => {
        getData();
      }, []);

      useEffect(() => {
        async function fetchPhoto() {
          const photoData = await PhotoHandler.loadPhoto(id);
          setPhotos(photoData);
        }
        fetchPhoto();
      }, [id]);

    const getData = async () => {
        const data = await PhotoHandler.loadPhotos();
        setPhotos(data);
      };

    const deleteShort = async (id) => {
        setPhotos(photos.filter((p) => p.id !== id));
        await PhotoHandler.deletePhoto(id);
      };

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    /* function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true); */

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth <= 768; 
    const originalArray = photos;


    const itemsPerPage = isMobile ? 2 : 5;
    const getPageItems = (page) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return originalArray.slice(startIndex, endIndex);
      };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    console.log(photos)

    if (photos.length === 0) {
        // return <div>Loading...</div>;
    }

    return (
        <div id="container">
            <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center' }}>
            
            {getPageItems(currentPage).map((item) => (
                item.show === 'Sí' &&
                <div id='card'
                    key={item.id}
                    
                >
                    <Modal.Dialog id='cardModal'>
                        <Modal.Header>
                            <Modal.Title id='titleCard'>
                                {item.title}
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body id='bodyCard'>
                            <img
                                src={item.img}
                                alt={item.title}
                            />
                            <p id='description'>{item.description}</p>
                        </Modal.Body>

                        <Modal.Footer id='buttonsIcons'>
                            <Link to={`/SeePhoto/${item.id}`}>
                            <Button className='buttonCard' 
                            variant="outline-light"><img src={Ver} alt="ver foto" className='icons'/></Button>
                            </Link>
                            <Link to={`/EditPhoto/${item.id}`}>
                                <Button className='buttonCard' id='edit' onClick={EditPhoto} variant="outline-light"><img className='icons'src={Editar} alt="editar foto"/></Button>
                            </Link>

                            <Button className='buttonCard' onClick={() => deleteShort(item.id)} variant="outline-light"><img className='icons' src={Eliminar} alt="eliminar foto"/></Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        >
                        <Modal.Header closeButton>
                            <Modal.Title>{item.title.id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <img
                            src={item.img.id}
                            alt={item.title.id}
                            style={{ width: '12vw' }}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="primary">Understood</Button>
                        </Modal.Footer>
                        </Modal>


                </div>
                
               
                ))}
            
            </div>
                {photos.length > itemsPerPage && (
                <ReactPaginate
                style={{fontSize:'16px', backgroundColor: 'white', borderRadius: '5px', color:'black', fontFamily: 'Mom'}}
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={Math.ceil(photos.length / itemsPerPage)}
                onPageChange={(data) => handlePageChange(data.selected + 1)}
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                />
                )}
        </div>
    )
}


