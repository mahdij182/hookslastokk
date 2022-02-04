 import React from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
import { useState } from 'react';

 
 export default function AddMovie({addHandler}) {
    
   

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newtitle, setnewtitle] = useState('')
  const [newdescription, setnewdescription] = useState('')
  const [newrating, setnewrating] = useState('')
  const [newposterurl, setnewposterurl] = useState('')

  const NewMovie ={
    id: Math.random(),
     name:newtitle ,
      posterurl:newposterurl ,
       description:newdescription ,
       rating:newrating   
      }

  const addmovie=()=>{
    addHandler()
    handleClose()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add movie      
       </Button> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add the new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Movie title</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie title" onChange={(e)=>setnewtitle(e.target.value)} />
    <Form.Label>Movie image</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie url poster" onChange={(e)=>setnewposterurl(e.target.value)}/>
    <Form.Label>movie rate</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie rate" onChange={(e)=>setnewrating(e.target.value)}/>
    <Form.Label>movie description</Form.Label>
    <Form.Control type="text" placeholder="Enter the movie description" onChange={(e)=>setnewdescription(e.target.value)}/>
  </Form.Group>
  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 