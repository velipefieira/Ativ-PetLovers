/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type Props = {
    tema: string;
};

interface State {
    show: boolean;
}

export default class ListaPets extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="modal-cliente">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Informações do pet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                <strong>Nome:</strong>
                            </p>
                            <p>
                                <strong>Tipo:</strong>
                            </p>
                            <p>
                                <strong>Raça:</strong>
                            </p>
                            <p>
                                <strong>Gênero:</strong>
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="pets">
                    <h3 className="titulo">Pets</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShow}>
                                Pet 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Editando Pet 1")}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando Pet 1")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShow}>
                                Pet 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Editando Pet 1")}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando Pet 1")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
