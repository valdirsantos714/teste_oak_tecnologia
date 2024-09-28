import { useContext, useState } from "react"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { GlobalContext } from "../../context/GlobalContext"

export const Home = () => {

    const [nome, setNome] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [valor, setValor] = useState<number>(0)
    const [disponivel, setDisponivel] = useState<boolean>(false)

    const { products, setProducts } = useContext(GlobalContext);

    const addProduct = () => {
        // Criando o novo produto
        const newProduct = {
            nome,
            descricao,
            valor,
            disponivel
        };

        // Atualizando o estado do array de produtos
        setProducts([...products, newProduct]);

        console.log(products);  // Verificando se os produtos estão sendo atualizados
    }

    const atualizaNome = (valor: React.ChangeEvent<HTMLInputElement>) => {
        setNome(valor.target.value)
    }

    const atualizaDescricao = (valor: React.ChangeEvent<HTMLInputElement>) => {
        setDescricao(valor.target.value)
    }

    const atualizaValor = (valor: React.ChangeEvent<HTMLInputElement>) => {
        setValor(parseFloat(valor.target.value))
    }

    const atualizaDisponivel = (valor: React.ChangeEvent<HTMLInputElement>) => {
        setDisponivel(valor.target.value === "Sim");
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
                        onChange={atualizaNome}
                    />

                    <Input 
                        textLabel="Descrição do produto:" 
                        idInput="descricao" 
                        placeholder="Digite a Descrição do produto" 
                        typeInput="text" 
                        onChange={atualizaDescricao}
                    />

                    <Input 
                        textLabel="Valor do produto:" 
                        idInput="valor" 
                        placeholder="Digite o Valor do produto" 
                        typeInput="number" 
                        onChange={atualizaValor}
                    />

                    <Input 
                        textLabel="Disponível para venda:" 
                        idInput="disponivel" 
                        placeholder="Digite o Valor do produto" 
                        typeInput="radio" 
                        radioOption1="Sim" 
                        radioOption2="Não" 
                        onChange={atualizaDisponivel}
                    />

                    <button onClick={addProduct} className="bg-blue-500 text-white p-2 mt-auto">
                        Adicionar Produto
                    </button>
                </Form>
            </main>
        </>
    )
}
