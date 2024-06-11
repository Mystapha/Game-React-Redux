import { Button, Form, Modal } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editgame } from '../redux/gameslice';


function Editgame({game}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
  
      id:Math.random(),
      name:game.name,
      description:game.description,
      img:game.img
    });
  const dispatch=useDispatch();
  return (
    <div>
       <>
      <Button style={{backgroundColor:"#a52a6e",border:"none",marginTop:"-10px",width:"120px",fontSize:"12px",height:"30px",padding:"5px"}} variant="primary" onClick={handleShow}>
        Edit Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the name of Game</Form.Label>
        <Form.Control type="text" placeholder={game.name} onChange={(e)=>setedited({...edited,name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the description Game</Form.Label>
        <Form.Control type="text" placeholder={game.description} onChange={(e)=>setedited({...edited,description:e.target.value})}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the image Game</Form.Label>
        <Form.Control type="text" placeholder={game.img}  onChange={(e)=>setedited({...edited,img:e.target.value})}  />
      </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            dispatch(editgame({id:game.id,edited}));
            handleClose()}}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
};

export default Editgame
