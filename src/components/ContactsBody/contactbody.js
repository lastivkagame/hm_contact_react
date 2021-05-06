import React, { Component, useState } from "react";

import "./contactbody.css";

import ContactCard from "../ContactCard";
import ContactStatistics from "../ContactStatistics";
import AddItem from '../AddItem/add-item'
import Header from "../Header";
import Menu from "../Menu/menu";

import { Container, ListGroup, ListGroupItem, Card, Button, Modal, Row, Col, Form } from 'react-bootstrap';
let k = 8000;

export default class ContactBody extends Component {
    state = {
        show: false,
        query: '',
        data: [
            {
                id: 1,
                name: "Ivanko",
                lastname: "W",
                age: 20,
                telephone: "+456 456 67 14",
                email: "someone3@gmail.com",
                favourite: false,
                social: {
                    fb: "https://fb.com/#",
                    insta: "https://instagram.com",
                },
            },
            {
                id: 2,
                name: "Pam",
                lastname: "JJJ",
                age: 18,
                telephone: "+123 456 67 90",
                email: "someone1@gmail.com",
                favourite: true,
                social: {
                    fb: "https://fb.com/#",

                },
            },
            {
                id: 3,
                name: "Gosha",
                lastname: "V",
                age: 17,
                telephone: "+321 456 67 09",
                email: "someone2@gmail.com",
                favourite: false,
                social: {
                    insta: "https://instagram.com",
                },
            },
        ],
    };

    onDelete = (id) => {
        let index = this.findElementByIndex(id);

        this.setState(({ data }) => {
            return {
                data: [...data.slice(0, index), ...data.slice(index + 1)],
            };
        });
    };

    onADD = (newEl) => {
        //console.log(newEl)
        this.setState(({ data }) => {
            return {
                data: [...data, newEl],
            };
        });
    }


    findElementByIndex = (id) => {
        return this.state.data.findIndex((x) => x.id == id);
    };

    onFavouriteChange = (id) => {
        var index = this.findElementByIndex(id);
        this.setState(({ data }) => {
            let newEl = data[index];
            newEl.favourite = !newEl.favourite;

            let before = data.slice(0, index);
            let after = data.slice(index + 1);

            return {
                data: [...before, newEl, ...after],
            };
        });
    };

    onFilter = () => {
        let users = this.state.data;
        if (this.state.query === "") {
            return this.getUsers(users);
        }

        return this.getUsers(users.filter((x) => {
            return x.name.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1;
        }));
    };

    onQueryChanged = (newQuery) => {
        this.setState({
            query: newQuery
        });
    };

    getUsers = (data) => {
        return data.map((el) => {
            return (
                <ContactCard
                    onDelete={() => this.onDelete(el.id)}
                    // onFavouriteChange={() => {el}}
                    // onADD = {()=>this.onADD(el)}
                    onSelect={() => this.onSelect(el.Id)}
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    lastname={el.lastname}
                    telephone={el.telephone}
                    email={el.email}
                    age={el.age}
                    favourite={el.favourite}
                    social={el.social}
                />
            );
        });
    };

    // showModal = e => {

    //     console.log("work");
    //     if (this.show === true) {
    //         this.setState({
    //             show: false
    //         });
    //     }
    //     else {
    //         this.setState({
    //             show: true
    //         });
    //     }
    // };


    render() {
        let myel = {
            id: k++,
            name: "Michael",
            age: 18,
            lastname: "KKK",
            telephone: "+2143543253",
            email: `someone12@gmail.com`,
            favourite: true,
            social: {
                fb: "https://fb.com/#",
                insta: "https://instagram.com",
            },
        };

        let cpuntofcontacts = this.state.data.length;

        const { deps } = this.state;
        //let //addModalClose=()=>this.setState({addModalShow: false});


        return (
            <>
                <Header onSearch={() => this.onQueryChanged()}></Header>
                {/* <Menu /> */}

                {/* <Router path="/" 
                render={()=>{}} />
                <Router path="add" component={AddItem}></Router>
                <Router path="about" render={()=> <h1>About us: telsaca</h1> } /> */}
                <div className="container">
                    <Container>
                        <ContactStatistics countofcontacts={cpuntofcontacts} className="list-marg"></ContactStatistics>

                        <ListGroup className="list-marg justify-content-between">
                            {/* <Button onClick={() => this.onADD(myel)} variant="outline-dark" >
                                ADD Random Contact</Button> */}

                            <div className="column">{this.onFilter()}</div>
                        </ListGroup>
                        <AddItem onAdd={this.onADD} />
                        {/* <AddItem onClick={this.showModal} /> */}
                    </Container>
                </div>
                
            </>
        );
    }
}




//I try do modal window for create fill contacts data, but modal window not work.
// There is work button that add random contact, and please write me what i must do with this modal window, if i want that it work
// class ModalAddContact extends Component 
// {

//     constructor(props){
//         super(props);
//         this.state = {deps:[], addModalShow: false}
//     }

//     render() {
//         return(
//             <>
//  {/* <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button> */}

//       <Modal
//         // show={show}
//         // onHide={handleClose}
//         // backdrop="static"
//         // keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           I will not close if you click outside me. Don't even try to press
//           escape key.
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={this.props.onHide}>
//             Close
//           </Button>
//           <Button variant="primary">Understood</Button>
//         </Modal.Footer>
//       </Modal>
//             </>
//         );
//     };
// }
