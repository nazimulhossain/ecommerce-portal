import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/apiCategories";


export const useCategory = (categoryName)=>{

   const {data: category,isLoading} = useQuery({
        queryKey: ['category'],
        queryFn: ()=> getCategory(categoryName)
    })

    return {category,isLoading}

    

}