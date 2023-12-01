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

export default class ListaProdutosServico extends Component<Props, State> {
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
                            <Modal.Title>Informações do produto/serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                <strong>Categoria:</strong>
                            </p>
                            <p>
                                <strong>Nome:</strong>
                            </p>
                            <p>
                                <strong>Preço:</strong>
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="produto">
                    <h3 className="titulo">Produtos</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShow}>
                                Produto 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Editando Produto 1")}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando Produto 1")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShow}>
                                Produto 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Editando Produto 2")}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando Produto 2")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="servico">
                    <h3 className="titulo">Serviços</h3>
                    <div className="list-group"> {/* Adicionei a div de list-group */}
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShow}>
                                Serviço 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Editando Serviço 1")}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando Serviço 1")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShow}>
                                Serviço 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Editando Serviço 2")}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando Serviço 2")}
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
