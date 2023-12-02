/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default interface ProdutosServicos {
    id: number;
    nome: string;
    valor: number;
    vendas: string;
};

type Props = {
    tema: string;
};

interface State {
    show: boolean;
    produtos: ProdutosServicos[]
    servicos: ProdutosServicos[]
    produtoServicoSelecionado: ProdutosServicos | null
}

export default class ListaProdutosServico extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
            produtos: [],
            servicos: [],
            produtoServicoSelecionado: null,
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/produtos")
          .then(response => {
            this.setState({ produtos: response.data });
          })
          .catch(error => {
            console.error("Erro ao obter clientes:", error);
          });
        axios.get("http://localhost:5000/servicos")
          .then(response => {
            this.setState({ servicos: response.data });
          })
          .catch(error => {
            console.error("Erro ao obter clientes:", error);
          });
    }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = (produtoservico: ProdutosServicos) => {
        this.setState({ show: true, produtoServicoSelecionado:produtoservico });
    };
    
    render() {
        const proServSelecionado = this.state.produtoServicoSelecionado
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                    <div className="modal-cliente">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Informações do produto/serviço</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {proServSelecionado && (
                            <><p>
                                <strong>Nome:</strong> {proServSelecionado.nome}
                            </p>
                            <p>
                                <strong>Valor:</strong> R$ {proServSelecionado.valor}
                            </p>
                            <p>
                                <strong>Vendas:</strong> {proServSelecionado.vendas} venda(s)
                            </p></>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fechar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="produtos">
                    <h3 className="titulo">Produtos</h3>
                    <div className="list-group">
                        {this.state.produtos.map(produto => (
                        <div key={produto.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                            href="#"
                            className="list-group-item-action custom-link"
                            onClick={() => this.handleShow(produto)}
                            >
                            {produto.nome}
                            </a>
                            <div className="btn-group">
                            <button
                                onClick={() => console.log(`Editando ${produto.nome}`)}
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                <FaPencil style={{ fontSize: 20 }} />
                            </button>
                            <button
                                onClick={() => console.log(`Deletando ${produto.nome}`)}
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                <FaRegTrashCan style={{ fontSize: 20 }} />
                            </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div className="servicos">
                        <h3 className="titulo">Serviços</h3>
                        <div className="list-group">
                            {this.state.servicos.map(servico => (
                            <div key={servico.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <a
                                href="#"
                                className="list-group-item-action custom-link"
                                onClick={() => this.handleShow(servico)}
                                >
                                {servico.nome}
                                </a>
                                <div className="btn-group">
                                <button
                                    onClick={() => console.log(`Editando ${servico.nome}`)}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log(`Deletando ${servico.nome}`)}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>

            </div>
        );
    }
}
