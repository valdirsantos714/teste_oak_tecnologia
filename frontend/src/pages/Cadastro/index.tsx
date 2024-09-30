import { useState } from "react"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { save } from "../../services/data"
import { Link } from "react-router-dom"

export const Cadastro = () => {

    const [nome, setNome] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [valor, setValor] = useState<number>(0)
    const [disponivel, setDisponivel] = useState<boolean>(false)

    const atualizaNome = (valor: React.ChangeEvent<HTMLInputElement>) => {
        setNome(valor.target.value)
    }

    const atualizaDescricao = (valor: React.ChangeEvent<HTMLInputElement>) => {
        setDescricao(valor.target.value)
    }

    const atualizaValor = (valor: React.ChangeEvent<HTMLInputElement>) => {
        setValor(parseFloat(valor.target.value))
    }

    const salvar = async () => {
        try {
            const response = await save(nome, descricao, valor, disponivel);
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }
    }


    return (
        <>
            <main>
                <Form h2Text="Cadastre seu produto">
                    <Input 
                        textLabel="Nome do produto:" 
                        idInput="nome" 
                        placeholder="Digite o Nome do produto" 
                        typeInput="text" 
                        value={nome}
                        onChange={atualizaNome}
                        required={true}
                    />

                    <Input 
                        textLabel="Descrição do produto:" 
                        idInput="descricao" 
                        placeholder="Digite a Descrição do produto" 
                        typeInput="text" 
                        value={descricao}
                        onChange={atualizaDescricao}
                        required={false}
                    />

                    <Input 
                        textLabel="Valor do produto:" 
                        idInput="valor" 
                        placeholder="Digite o Valor do produto" 
                        typeInput="number" 
                        value={valor}
                        onChange={atualizaValor}
                        required={true}
                    />

                    <label className="label_style">Disponível para venda:</label>

                    <div className="flex gap-[1rem] pt-[0.3rem]">
                        <label htmlFor="opcao1">
                            <input type="radio" name="opcao" id="opcao1" value="Sim" className="mr-[0.2rem]" onClick={() => setDisponivel(true)}/> 
                        Sim
                        </label>
                        <label htmlFor="opcao2">
                            <input type="radio" name="opcao" id="opcao2" value="Não" className="mr-[0.2rem]" onClick={() => setDisponivel(false)}/>
                            Não
                        </label>
                    </div>

                    {nome.trim() === "" || !valor || valor <= 0 ? (
                        <Link onClick={salvar} to={""} className="button_white_style">
                        Adicionar Produto
                        </Link>
                    ): (
                        <Link onClick={salvar} to={"/lista"} className="button_style">
                        Adicionar Produto
                        </Link>
                    )}
                    
                </Form>
            </main>
        </>
    )
}
