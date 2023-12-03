import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listagens/listaClientes";
import FormularioCadastroProdutoServico from "./forms/formularioCadastroProdutoServico";
import FormularioCadastroPet from "./forms/formularioCadastroPet";
import ListaProdutoServico from "./listagens/listaProdutoServico";
import ListaPets from "./listagens/listaPets";
import Listagens from "./listagens/listagens";
import Compras from "./compras";
import FormularioCadastroCliente from "./forms/formularioCadastroCliente";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state>{
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Pets', 'Produtos e Serviços', 'Listagens', 'Compras']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastro de Pets') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Cadastro de Produto e Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProdutoServico tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Produtos e Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutoServico tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Pets') {
            return (
                <>
                    {barraNavegacao}
                    <ListaPets tema="#e3f2fd"/>
                </>
            )
        } else if (this.state.tela === 'Listagens') {
            return (
                <>
                    {barraNavegacao}
                    <Listagens tema="e3f2fd"/>
                </>
            )
        } else if (this.state.tela === 'Compras') {
            return (
                <>
                    {barraNavegacao}
                    <Compras tema="e3f2fd"/>
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
    }
}