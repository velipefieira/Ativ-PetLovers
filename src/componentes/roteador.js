import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import ListaProdutoServico from "./listaProdutoServiço";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProdutoServico from "./formularioCadastroProdutoServico";
import Compras from "./compras";
import Home from "./home";
import Listagens from "./listagens";
import ListaPets from "./listaPets";


export default function Roteador() {
  const [tela, setTela] = useState("Home");

  const selecionarView = (novaTela, evento) => {
    evento.preventDefault();
    console.log(novaTela);
    setTela(novaTela);
  };

  let barraNavegacao = (
    <BarraNavegacao
      seletorView={selecionarView}
      tema="#e3f2fd"
      botoes={[
        "Home",
        "Clientes",
        "Pets",
        "Produtos e Serviços",
        "Compras",
        "Listagens"
      ]}
    />
  );

  switch (tela) {
    case "Clientes":
      return (
        <>
          {barraNavegacao}
          <ListaCliente tema="#e3f2fd" />
        </>
      );
    case "Cadastro de Pets":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroPet tema="#e3f2fd" />
        </>
      );
    case "Cadastro de Produto e Serviço":
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroProdutoServico tema="#e3f2fd" />
        </>
      );
    case "Compras":
      return (
        <>
          {barraNavegacao}
          <Compras tema="#e3f2fd" />
        </>
      );
    case "Home":
      return (
        <>
          {barraNavegacao}
          <Home tema="#e3f2fd" />
        </>
      );
    case "Listagens":
      return (
        <>
          {barraNavegacao}
          <Listagens tema="#e3f2fd" />
        </>
      );
    case "Produtos e Serviços":
      return (
        <>
          {barraNavegacao}
          <ListaProdutoServico tema="#e3f2fd" />
        </>
      );
      case "Pets":
        return (
          <>
            {barraNavegacao}
            <ListaPets tema="#e3f2fd" />
          </>
        );
    default:
      return (
        <>
          {barraNavegacao}
          <FormularioCadastroCliente tema="#e3f2fd" />
        </>
      );
  }
}
