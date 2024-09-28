import { ReactElement, createContext, useState, Dispatch, SetStateAction } from "react";

// Interface que define os dados de um produto
interface Product {
    nome: string;
    descricao: string;
    valor: number;
    disponivel: boolean;
}

// Interface para o contexto global que inclui os produtos e a função para atualizar os produtos
interface GlobalContextProps {
    products: Product[];
    setProducts: Dispatch<SetStateAction<Product[]>>;
}

// Criação do contexto com o valor inicial como `undefined`
export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// Interface para o provedor do contexto que aceita `children`
interface GlobalProviderProps {
    children: ReactElement;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    // Estado que guarda a lista de produtos
    const [products, setProducts] = useState<Product[]>([]);

    return (
        <GlobalContext.Provider value={{ products, setProducts }}>
            {children}
        </GlobalContext.Provider>
    );
};
