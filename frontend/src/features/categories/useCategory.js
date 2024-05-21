import { useQuery } from "@tanstack/react-query";
import { getProductsByCategoryName } from "../../services/apiCategories";


export const useCategory = (categoryName)=>{

   const {data: category,isLoading} = useQuery({
        queryKey: ['category'],
        queryFn: ()=> getProductsByCategoryName(categoryName)
    })

    return {category,isLoading}

    

}