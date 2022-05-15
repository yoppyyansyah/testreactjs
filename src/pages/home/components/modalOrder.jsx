import React, { useState, useEffect } from 'react';
import {
    Button,
    Modal,
    Form,
} from 'react-bootstrap';

import API from '../../../services/home/index';

function ModalOrder({ id }) {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        "hospital_id": id,
        "name": "",
        "email": "",
        "phone": ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [message, setMessage] = useState("");

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData((currentFormData) => {
            const nextFormData = {
                ...currentFormData,
                [name]: value,
            }
            return nextFormData;
        });
    }

    const handleSubmit = () => {
        if (formData.name == "") {
            setMessage("Please insert name");
        } else if (formData.email == "") {
            setMessage("Please insert email");
        } else if (formData.phone == "") {
            setMessage("Please insert phone");
        } else {
            API.postOrder(formData).then(result => {
                if (result.success) {
                    setShow(false);
                } else {
                    setMessage("Please check API")
                }
            }, (err) => {
                console.log(err);
                setMessage("Please check API")
            })

        }
    }

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                Order
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" id="name" name="name" onChange={onChange} placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" id="email" name="email" onChange={onChange} placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" id="phone" name="phone" onChange={onChange} placeholder="Enter Phone" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <span className="text-danger">{message}</span>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalOrder;