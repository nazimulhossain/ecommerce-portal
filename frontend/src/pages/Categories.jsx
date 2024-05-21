import { useParams } from "react-router-dom";
import { useCategory } from "../features/categories/useCategory";
import ProductList from "../features/products/ProductList";

function Categories(){
    
    const {categoryName}= useParams();
    const name = categoryName.split("-");
    const {category,isLoading} = useCategory(name.join(" "));



    return(
        <div>
            <h2 className="text-sm px-12 mb-4 font-semibold">{name.join(" ").toUpperCase()}&nbsp;&nbsp;({category?.length})</h2>
            <div className="grid grid-cols-3 gap-2">

            {
                category?.map((product)=> {
                    return <ProductList product={product} key={product.productId} />
                })
            }
            </div>
        </div>
    )

}

export default Categories;