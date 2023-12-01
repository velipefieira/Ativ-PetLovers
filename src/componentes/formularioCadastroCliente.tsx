import { Component, ChangeEvent } from "react";
import "./styles/form.css";

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

type State = {
    rgList: RgInfo[];
    telefoneList: TelefoneInfo[];
};

export default class FormularioCadastroCliente extends Component<Props, State> {
    state: State = {
        rgList: [{ rg: "", dataEmissao: "" }],
        telefoneList: [{ telefone: "" }],
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
                <h3 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
                    Cadastro de Clientes
                </h3>
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
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
