/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LiaShoppingCartSolid } from "react-icons/lia";

type Props = {
    tema: string;
};

interface State {
    show: boolean;
    count: number;
}

export default class ListaProdutosServico extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
            count: 0,
        };
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    handleIncrementCounter = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    handleDecrementCounter = () => {
        if (this.state.count > 0) {
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }));
        }
    };

    handleConfirm = () => {
        console.log('Confirmação');
    };

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="modal-compra">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Informações do produto/serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <p>
                                    <strong>Categoria:</strong>
                                </p>
                                <p>
                                    <strong>Nome:</strong>
                                </p>
                                <p>
                                    <strong>Preço:</strong>
                                </p>
                                <p>
                                    <strong>Quantidade:</strong>
                                </p>
                                <div className="d-flex flex-column align-items-center mt-3">
                                    <div className="btn-group d-flex align-items-center mb-2">
                                        <button
                                            onClick={this.handleIncrementCounter}
                                            type="button"
                                            className="btn btn-sm increment-btn"
                                        >
                                            <FaPlus style={{ fontSize: 20 }} />
                                        </button>
                                        <p className="count">{this.state.count}</p>
                                        <button
                                            onClick={this.handleDecrementCounter}
                                            type="button"
                                            className="btn btn-sm decrement-btn"
                                        >
                                            <FaMinus style={{ fontSize: 20 }} />
                                        </button>
                                    </div>
                                    
                                    <br/>
                                    
                                    <button
                                        onClick={this.handleConfirm}
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
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
                            <a href="#" className="list-group-item-action custom-link">
                                Produto 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={this.handleShow}
                                    type="button"
                                    className="botao-comprar"
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShow}>
                                Produto 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={this.handleShow}
                                    type="button"
                                    className="botao-comprar"
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="servico">
                    <h3 className="titulo">Serviços</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link" onClick={this.handleShow}>
                                Serviço 1
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={this.handleShow}
                                    type="button"
                                    className="botao-comprar"
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a href="#" className="list-group-item-action custom-link">
                                Serviço 2
                            </a>
                            <div className="btn-group">
                                <button
                                    onClick={this.handleShow}
                                    type="button"
                                    className="botao-comprar"
                                >
                                    <LiaShoppingCartSolid style={{ fontSize: 20 }} />
                                    <p style={{ margin: 0 }}>Comprar</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
