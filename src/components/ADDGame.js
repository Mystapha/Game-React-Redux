import { Button, Form, Modal } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addgame } from '../redux/gameslice';

function ADDGame() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newgame, setnewgame] = useState({
  
      id:Math.random(),
      name:"",
      description:"",
      img:""
    });
  const dispatch=useDispatch();
  return (
    <div>
       <>
      <Button style={{backgroundColor:"#a52a6e",border:"none",marginTop:"40px"}} variant="primary" onClick={handleShow}>
        ADD Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the name of Game</Form.Label>
        <Form.Control type="text" placeholder="Enter Game Name" onChange={(e)=>setnewgame({...newgame,name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the description Game</Form.Label>
        <Form.Control type="text" placeholder="Enter Game description" onChange={(e)=>setnewgame({...newgame,description:e.target.value})}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter the image Game</Form.Label>
        <Form.Control type="text" placeholder="Enter Game image"  onChange={(e)=>setnewgame({...newgame,img:e.target.value})}  />
      </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addgame(newgame));handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
};

export default ADDGame
