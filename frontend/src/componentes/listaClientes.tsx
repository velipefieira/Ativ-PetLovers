import React, { Component } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Pet from "./listaPets";
import ProdutosServicos from "./listaProdutoServico";

export default interface Cliente {
  id: number;
  nome: string;
  nomeSocial: string;
  cpf: {
    valor: string;
    dataEmissao: string;
  };
  rgs: {
    id: number;
    valor: string;
    dataEmissao: string;
  }[];
  dataCadastro: string;
  telefones: {
    id: number;
    ddd: string;
    numero: string;
  }[];
  produtosConsumidos: ProdutosServicos[];
  servicosConsumidos: ProdutosServicos[];
  pets: Pet[];
}

type Props = {
  tema: string;
  seletorView: Function
};

interface State {
  show: boolean;
  clientes: Cliente[];
  clienteSelecionado: Cliente | null;
};

export default class ListaCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      show: false,
      clientes: [],
      clienteSelecionado: null,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/clientes")
      .then(response => {
        this.setState({ clientes: response.data });
      })
      .catch(error => {
        console.error("Erro ao obter clientes:", error);
      });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = (cliente: Cliente) => {
    this.setState({ show: true, clienteSelecionado: cliente });
  };

  render() {
    const { clienteSelecionado } = this.state;
    let tema = this.props.tema;

    return (
      <div className="container-fluid">
        <div className="modal-cliente">
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Informações do cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {clienteSelecionado && (
                <>
                  <p><strong>Nome:</strong> {clienteSelecionado.nome}</p> <hr/>
                  <p><strong>Nome social:</strong> {clienteSelecionado.nomeSocial}</p> <hr/>
                  <p><strong>CPF:</strong> {clienteSelecionado.cpf.valor} - Emitido em: {clienteSelecionado.cpf.dataEmissao}</p> <hr/>
                  <p><strong>RG:</strong>{clienteSelecionado.rgs.map ( rg =>  (
                    <> <p>{rg.valor} - Emitido em: {rg.dataEmissao} </p> <hr/> </>
                    ))}</p>
                  <p><strong>Telefone:</strong>{clienteSelecionado.telefones.map ( tel =>  (
                    <> <p>({tel.ddd}) {tel.numero} </p> <hr/> </>
                    ))}</p>
                  <p><strong> Pets: </strong>
                {clienteSelecionado.pets.length > 0 ? (
                    <>
                    {clienteSelecionado.pets.map(pet => (
                        <div key={pet.id}>
                        <p><strong>Nome:</strong> {pet.nome}</p>
                        <p><strong>Tipo:</strong> {pet.tipo}</p>
                        <p><strong>Raça:</strong> {pet.raca}</p>
                        <p><strong>Gênero:</strong> {pet.genero}</p>
                        <hr/>
                        </div>
                    ))}
                    </>
                ) : (
                  <p>Não há pet cadastrado. <hr/> </p>
                )}</p>   
                  <p><strong> Serviços Consumidos: </strong>
                {clienteSelecionado.servicosConsumidos.length > 0 ? (
                    <>
                    {clienteSelecionado.servicosConsumidos.map(serv => (
                        <div key={serv.id}>
                        <p><strong>Nome:</strong> {serv.nome}</p>
                        <p><strong>Valor:</strong> {serv.valor}</p>
                        <hr/>
                        </div>
                    ))}
                    </>
                ) : (
                    <p>Não há serviços consumidos. <hr/> </p>
                )}</p>  
                  <p><strong> Produtos Consumidos: </strong>
                {clienteSelecionado.produtosConsumidos.length > 0 ? (
                    <>
                    {clienteSelecionado.produtosConsumidos.map(prod => (
                        <div key={prod.id}>
                        <p><strong>Nome:</strong> {prod.nome}</p>
                        <p><strong>Valor:</strong> {prod.valor}</p>
                        <hr/>
                        </div>
                    ))}
                    </>
                ) : (
                    <p>Não há produtos consumidos. <hr/> </p>
                )}</p>  
                </>
              )}
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
            {this.state.clientes.map(cliente => (
              <div key={cliente.id} className="list-group-item d-flex justify-content-between align-items-center">
                <a
                  href="#"
                  className="list-group-item-action custom-link"
                  onClick={() => this.handleShow(cliente)}
                >
                  {cliente.nome}
                </a>
                <div className="btn-group">
                  <button
                    onClick={() => console.log(`Editando ${cliente.nome}`)}
                    type="button"
                    className="btn btn-outline-primary"
                  >
                    <FaPencil style={{ fontSize: 20 }} />
                  </button>
                  <button
                    onClick={() => console.log(`Deletando ${cliente.nome}`)}
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
