/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Cliente from "./listaClientes";
import axios from "axios";

export default interface Pet {
    id: number;
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
    dono: Cliente | null;
  }
type Props = {
    tema: string;
};

interface State {
    show: boolean;
    pets: Pet[];
    petSelecionado: Pet | null
}

export default class ListaPets extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            show: false,
            pets:[],
            petSelecionado: null
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/pets")
          .then(response => {
            this.setState({ pets: response.data });
          })
          .catch(error => {
            console.error("Erro ao obter clientes:", error);
          });
      }

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = (pet: Pet) => {
        this.setState({ show: true, petSelecionado: pet });
    };

    render() {
        const { petSelecionado } = this.state;
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="modal-cliente">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Informações do pet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {petSelecionado && (
                            <><p>
                                <strong>Nome:</strong> {petSelecionado.nome}
                            </p>
                            <p>
                                <strong>Tipo:</strong> {petSelecionado.tipo}
                            </p>
                            <p>
                                <strong>Raça:</strong> {petSelecionado.raca}
                            </p>
                            <p>
                                <strong>Gênero:</strong> {petSelecionado.genero}
                            </p> </>
                            )}
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
                    {this.state.pets.map(pet => (
                    <div key={pet.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <a
                        href="#"
                        className="list-group-item-action custom-link"
                        onClick={() => this.handleShow(pet)}
                        >
                        {pet.nome}
                        </a>
                        <div className="btn-group">
                        <button
                            onClick={() => console.log(`Editando ${pet.nome}`)}
                            type="button"
                            className="btn btn-outline-primary"
                        >
                            <FaPencil style={{ fontSize: 20 }} />
                        </button>
                        <button
                            onClick={() => console.log(`Deletando ${pet.nome}`)}
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
