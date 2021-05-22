import React, { Component } from "react";

import "./add-item.css";
import { Container, ListGroup, ListGroupItem, Card, Button, Modal, Row, Col, Form } from 'react-bootstrap';


export default class AddItem extends Component {

    state = {
        show: false,
        name: "",
        lastname: "",
        age: "",
        telephone: "",
        email: "",
        favorite: false,
        social: {
            fb: null,
            insta: null
        },
    }

    onNameChange = (e) => {
        //console.log(e.target.value);
        // this.state.name = ?
        this.setState({
            name: e.target.value,
        });
    }

    onSocialFbChange = (e) => {

        // let t = social.fb;
        // this.setState({
        //    social.fb = e.target.value,
        // });
    }

    onEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    onTelephoneChange = (e) => {
        this.setState({
            telephone: e.target.value,
        });
    }

    onAgeChange = (e) => {
        this.setState({
            age: e.target.value,
        });
    }

    onLastnameChange = (e) => {
        this.setState({
            lastname: e.target.value,
        });
    }

    onSubmitContact = (e) => {
        e.preventDefault();
        console.log("work submit");
        this.props.onAdd(this.state);
        this.setState({
            name: "",
            age: "",
            show: false,
        });
    }

    showModal = e => {

        console.log("work show modal");
        if (this.state.show === true) {
            this.setState({
                show: false
            });
            console.log(this.show);
        }
        else {
            this.setState({
                show: true
            });
            console.log(this.state.show);
        }
    };

    render() {
        return (
            <>
            <div className="bottom-right">
                                <button onClick={this.showModal} className="btn btn-success"><i className="fas fa-plus-circle"></i>
                                </button>
                            </div>
                <Modal show={this.state.show}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Contact</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form onSubmit={this.onSubmitContact} className="form-group mt-4">
                            <input onChange={this.onNameChange}
                                name="name" placeholder="enter name"
                                className="form-control mb-3" value={this.state.name} />
                            <input onChange={this.onLastnameChange} value={this.state.lastname} name="lastname" placeholder="enter lastname" className="form-control mb-3" />
                            <input onChange={this.onAgeChange} value={this.state.age} name="age" placeholder="enter age" className="form-control mb-3" />
                            <input onChange={this.onTelephoneChange} value={this.state.telephone} name="telephone" placeholder="enter telephone" className="form-control mb-3" />
                            <input onChange={this.onEmailChange} value={this.state.email} name="email" placeholder="enter email" className="form-control" />
                            
                            <div className="bottom-right">
                                {/* <button type="submit" className="btn btn-success"><i className="fas fa-plus-circle"></i>
                                </button> */}
                            </div>
                        </form>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.showModal} variant="secondary">Close</Button>
                        <Button type="submit"  variant="primary">Save changes</Button>
                        <button type="submit" className="btn btn-success"><i className="fas fa-plus-circle"></i>
                                </button>
                    </Modal.Footer>
                </Modal>



            </>

        );

    }

}