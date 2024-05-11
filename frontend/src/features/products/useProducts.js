import { useQuery } from "@tanstack/react-query"
import { getproducts } from "../../services/apiProducts"

export const useProducts = ()=> {

    const {data:products, isLoading} = useQuery({
        queryKey: ["products"],
        queryFn: getproducts
    })

    return {products,isLoading}
}