import React, { ChangeEvent, Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

type TelefoneInfo = {
    telefone: string;
};

type RgInfo = {
    rg: string;
    dataEmissao: string;
};

type Props = {
    tema: string;
};

interface State {
    showInfoModal: boolean;
    showEditModal: boolean;
    rgList: RgInfo[];
    telefoneList: TelefoneInfo[];
};


export default class ListaCliente extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showInfoModal: false,
            showEditModal: false,
            rgList: [{ rg: "", dataEmissao: "" }],
            telefoneList: [{ telefone: "" }],
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

    addRgField = () => {
        this.setState((prevState) => ({
            rgList: [...prevState.rgList, { rg: "", dataEmissao: "" }],
        }));
    };

    addTelefoneField = () => {
        this.setState((prevState) => ({
            telefoneList: [...prevState.telefoneList, { telefone: "" }],
        }));
    };

    handleRgChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedRgList = [...prevState.rgList];
            updatedRgList[index].rg = value;
            return { rgList: updatedRgList };
        });
    };

    handleDataEmissaoChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedRgList = [...prevState.rgList];
            updatedRgList[index].dataEmissao = value;
            return { rgList: updatedRgList };
        });
    };

    handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        this.setState((prevState) => {
            const updatedTelefoneList = [...prevState.telefoneList];
            updatedTelefoneList[index].telefone = value;
            return { telefoneList: updatedTelefoneList };
        });
    };

    render() {
        let tema = this.props.tema;

        return (
            <div className="container-fluid">
                <div className="modal-cliente">
                    <Modal show={this.state.showInfoModal} onHide={this.handleCloseInfoModal}>
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
                                <h5 style={{ textAlign: "center" }}>Pets</h5>
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
                                <h5 style={{ textAlign: "center" }}>Produtos/Serviços consumidos</h5>
                                <p>
                                    <strong>Nome do produto/serviço:</strong>
                                </p>
                                <p>
                                    <strong>Valor do produto/serviço:</strong>
                                </p>
                            </div>
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
                            <Modal.Title>Atualizar cliente</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <label className="form-titulo">Nome:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Digite o nome" aria-label="Nome" aria-describedby="basic-addon1" />
                                </div>

                                <label className="form-titulo">Nome social:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Digite o nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                                </div>

                                <label className="form-titulo">E-mail:</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                                    <input type="text" className="form-control" placeholder="Digite o E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                                </div>

                                <label className="form-titulo">CPF:</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder=" Digite o CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                                </div>

                                <label className="form-titulo">Data de Emissão do CPF:</label>
                                <div className="input-group mb-3">
                                    <input type="date" className="form-control" placeholder="Data de Emissão do CPF" aria-label="Data de emissão do CPF" aria-describedby="basic-addon1" />
                                </div>

                                <label className="form-titulo">RG:</label>
                                {this.state.rgList.map((rg, index) => (
                                    <div key={index} className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Digite o RG"
                                            value={rg.rg}
                                            onChange={(e) => this.handleRgChange(e, index)}
                                        />
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Data de Emissão do RG"
                                            value={rg.dataEmissao}
                                            onChange={(e) => this.handleDataEmissaoChange(e, index)}
                                        />
                                    </div>
                                ))}

                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    style={{ background: tema, marginBottom: 10 }}
                                    onClick={this.addRgField}
                                >
                                    Adicionar RG
                                </button>

                                <br />

                                <label className="form-titulo">Telefone:</label>
                                {this.state.telefoneList.map((telefone, index) => (
                                    <div key={index} className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Digite o telefone"
                                            value={telefone.telefone}
                                            onChange={(e) => this.handleTelefoneChange(e, index)}
                                        />
                                    </div>
                                ))}

                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    style={{ background: tema, marginBottom: 10 }}
                                    onClick={this.addTelefoneField}
                                >
                                    Adicionar Telefone
                                </button>

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

                <div className="conteudo">
                    <h3 className="titulo">Clientes</h3>
                    <div className="list-group">
                        <div className="list-group-item d-flex justify-content-between align-items-center">
                            <a
                                href="#"
                                className="list-group-item-action custom-link"
                                onClick={this.handleShowInfoModal}
                            >
                                Cliente 1
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
                                onClick={this.handleShowInfoModal}
                            >
                                Cliente 2
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
            </div >
        );
    }
}
