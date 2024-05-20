import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../services/apiCategories"

export const useProducts = (id)=> {

    const {data:products, isPending} = useQuery({
        queryKey: ['products'],
        queryFn: ()=> getProducts(id)
    })


    return {products,isPending}
}