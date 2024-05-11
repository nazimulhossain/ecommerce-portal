import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProducts";

export function useProduct(id){
    const {data: singleProduct, isLoading} = useQuery({
        queryKey: ['product'],
        queryFn: ()=> getProduct(id)
    })

    return {singleProduct,isLoading}
}