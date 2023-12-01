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

export default class ListaCliente extends Component<Props, State> {
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
                            <Modal.Title>Informações do cliente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                <strong>Nome:</strong>
                            </p>
                            <p>
                                <strong>Nome social:</strong>
                            </p>
                            <p>
                                <strong>E-mail:</strong>
                            </p>
                            <p>
                                <strong>CPF:</strong>
                            </p>
                            <p>
                                <strong>Data de emissão do CPF:</strong>
                            </p>
                            <p>
                                <strong>RG:</strong>
                            </p>
                            <p>
                                <strong>Data de emissão do RG:</strong>
                            </p>
                            <p>
                                <strong>Telefone:</strong>
                            </p>

                            <div className="pets-cliente">
                                <h5 style={{ textAlign: "center"}}>Pets</h5>
                                <p>
                                    <strong>Nome do pet:</strong>
                                </p>
                                <p>
                                    <strong>Tipo do pet:</strong>
                                </p>
                                <p>
                                    <strong>Raça do pet:</strong>
                                </p>
                                <p>
                                    <strong>Gênero do pet:</strong>
                                </p>
                            </div>

                            <div className="produtos-servicos">
                                <h5 style={{ textAlign: "center"}}>Produtos/Serviços consumidos</h5>
                                <p>
                                    <strong>Nome do produto/serviço:</strong>
                                </p>
                                <p>
                                    <strong>Valor do produto/serviço:</strong>
                                </p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className="conteudo">
                    <h3 className="titulo">Clientes</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                                href="#"
                                className="list-group-item-action custom-link"
                                onClick={this.handleShow}
                            >
                                Cliente 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Editando Cliente 1")}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando Cliente 1")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                                href="#"
                                className="list-group-item-action custom-link"
                                onClick={this.handleShow}
                            >
                                Cliente 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={() => console.log("Editando Cliente 1")}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando Cliente 1")}
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
