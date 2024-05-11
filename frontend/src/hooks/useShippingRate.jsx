import { useQuery } from "@tanstack/react-query";
import { getShippingRate } from "../services/apiShippingRates";

export function useShippingRates(id){
   const {data: rates, isLoading}  = useQuery({
        queryKey:["shippingrate"],
        queryFn:()=> getShippingRate(id)
    })

  

    return {rates,isLoading}
} 