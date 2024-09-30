import { Link } from "react-router-dom"
import { findAll } from "../../services/data"
import { useEffect, useState } from "react"


type Product = {
  name: string;
  price: number
}

export const ListagemProdutos = () => {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    lista()
  }, [])


  const lista = async () => {
    try {
      const list = await findAll()
      setProducts(list)
      console.log(products);
      
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <main>
        <div className="container">
          <div className="div_style ">
            <h2 className="h2_style pb-4" onClick={lista}>Listagem de Produtos</h2>
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left border-b border-gray-300">
                  <th className="th_style py-2 px-4">Nome</th>
                  <th className="th_style py-2 px-4">Valor</th>
                </tr>
              </thead>
              <tbody>
                
                {products.map((p, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="td_style  py-2 px-4">{p.name}</td>
                    <td className="td_style py-2 px-4">{p.price}</td>
                  </tr>
                ))}

              </tbody>
            </table>          
      
            <Link to={"/"} className="button_style">
              Adicionar Mais Produtos
            </Link>
          </div>
        </div>
      </main>
  )
}