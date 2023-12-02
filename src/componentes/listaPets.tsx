/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ChangeEvent, Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type Props = {
    tema: string;
};

interface State {
    showInfoModal: boolean;
    showEditModal: boolean;
}

export default class ListaPets extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showInfoModal: false,
            showEditModal: false,
        };
    }


    handleShowInfoModal = () => {
        this.setState({ showInfoModal: true });
    };

    handleCloseInfoModal = () => {
        this.setState({ showInfoModal: false });
    };

    handleShowEditModal = () => {
        this.setState({ showEditModal: true });
    };

    handleCloseEditModal = () => {
        this.setState({ showEditModal: false });
    };

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="modal-pet">
                    <Modal show={this.state.showInfoModal} onHide={this.handleCloseInfoModal}>
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
                            <Button variant="secondary" onClick={this.handleCloseInfoModal}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className="modal-atualizar">
                    <Modal show={this.state.showEditModal} onHide={this.handleCloseEditModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Atualizar pet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <label className="form-titulo">CPF do cliente:</label>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Digite o CPF do cliente"
                                        aria-label="Digite o CPF do cliente"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>

                                <h5 className="form-titulo">Pets:</h5>
                                <div>
                                    <label className="form-titulo">Nome do pet:</label>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Digite o nome do pet"
                                        />
                                    </div>

                                    <label className="form-titulo">Tipo do pet:</label>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Digite o tipo do pet"
                                        />
                                    </div>

                                    <label className="form-titulo">Raça do pet:</label>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Digite a raça do pet"
                                        />
                                    </div>

                                    <label className="form-titulo">Gênero do pet:</label>
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Digite o gênero do pet"
                                        />
                                    </div>
                                </div>

                                <div className="input-group mb-3 d-flex justify-content-center">
                                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                                        Atualizar
                                    </button>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleCloseEditModal}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className="pets">
                    <h3 className="titulo">Pets</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShowInfoModal}>
                                Pet 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={this.handleShowEditModal}
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
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShowInfoModal}>
                                Pet 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={this.handleShowEditModal}
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
