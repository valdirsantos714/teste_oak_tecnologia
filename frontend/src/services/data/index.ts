import { api } from "../api"

export const save = async (name:string, description:string, price:number, availableForSale:boolean) => {
    try {

        if (name.trim() === "" || price <= 0 || !price) {
            alert("Preencha os campos Nome e Valor do produto corretamente!")
        } else {
            const request = await fetch(`${api}/product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Especifica que o conteúdo é JSON
                },
                body: JSON.stringify({
                    name,
                    description,
                    price,
                    availableForSale
                })
            })

            const response = await request.json()

            const product =  await response

            return product
        }
    } catch (error) {
        console.log(error);
        
    }
}

export const findAll = async () => {
    try {
        const list = await fetch(`${api}/product/all`)
        return await list.json()
        
    } catch (error) {
        console.log(error);
    }
}