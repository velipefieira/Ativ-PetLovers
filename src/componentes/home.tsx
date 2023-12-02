/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
    tema: string;
};

export default class Home extends Component<Props> {
    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <h1 className="titulo-home">PetLovers</h1>
                <h2 className="subtitulo-home">Seja bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias!</h2>
                <hr/>
                <div className="recursos">
                    <h3 className="titulo-recursos">Recursos principais da nossa plataforma:</h3>
                    <ul>
                        <li className="lista-recursos">Cadastro de clientes, pets, produtos e serviços</li>
                        <li className="lista-recursos">Recursos para visualizar, atualizar e excluir informações sobre os clientes, pets, produtos e serviços</li>
                        <li className="lista-recursos">Listagens gerais sobre o histórico da plataforma</li>
                        <li className="lista-recursos">Comprar produtos e serviços</li>
                    </ul>
                </div>

                <div className="contatos">
                    <h3 className="titulo-contatos">Contato:</h3>
                    <h5>Nos mande um email!</h5>
                    <ul>
                        <li className="lista-contatos">Email: petlovers@gmail.com </li>
                    </ul>
                </div>

                <h4 className="navegacao">Para saber mais, navegue pelo nosso site utilizando os links do menu da página.</h4>


            </div>
        );
    }
}
