import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PhotoHandler from '../handler/PhotoHandler';

function Example() {
  const [show, setShow] = useState(false);
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
  
  const { title, img}= photo;


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

render(<Example />);