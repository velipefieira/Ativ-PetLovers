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
    showInfoModal: boolean;
    showEditModal: boolean;
}

export default class ListaProdutosServico extends Component<Props, State> {
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
                    <div className="modal-produtoServico">
                    <Modal show={this.state.showInfoModal} onHide={this.handleCloseInfoModal}>
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
                            <Button variant="secondary" onClick={this.handleCloseInfoModal}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className="modal-atualizar">
                    <Modal show={this.state.showEditModal} onHide={this.handleCloseEditModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Atualizar produto/serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <form>
                    <label className="form-titulo">Tipo:</label>
                    <div className="input-group mb-3">
                        <select className="form-select" id="tipo">
                            <option value="" disabled selected>Selecione a opção que deseja cadastrar</option>
                            <option value="produto">Produto</option>
                            <option value="servico">Serviço</option>
                        </select>
                    </div>
                    <label className="form-titulo">Nome do produto/serviço:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Digite o nome do produto/serviço" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <label className="form-titulo">Valor do produto/serviço:</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                        <input type="number" className="form-control" placeholder="Digite o valor do produto/serviço" aria-label="Valor" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3 d-flex justify-content-center">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                            Atualizar
                        </button>
                    </div>
                </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleCloseInfoModal}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

                <div className="produto">
                    <h3 className="titulo">Produtos</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShowInfoModal}>
                                Produto 1
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
                                    onClick={() => console.log("Deletando Produto 1")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShowInfoModal}>
                                Produto 2
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
                    <div className="list-group"> 
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShowInfoModal}>
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
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShowInfoModal}>
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
