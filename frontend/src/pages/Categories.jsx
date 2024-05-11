import { useParams } from "react-router-dom";
import { useCategory } from "../features/categories/useCategory";

function Categories(){
    
    const {categoryName}= useParams();
    const {category,isLoading} = useCategory(categoryName);

    console.log(category);




    return(
        <div>
            Categories
        </div>
    )

}

export default Categories;