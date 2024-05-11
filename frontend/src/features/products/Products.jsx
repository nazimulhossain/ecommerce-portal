import ProductList from "./ProductList";
import { useProducts } from "./useProducts";

function Products({size}){

    const {products,isLoading} = useProducts();

    return (
        <>

        {isLoading ? <h2>Loading....</h2> 
        
        : 
        
        size===1 ? <ProductList product={products[0]} /> :products?.map((product)=> <ProductList product={product} key={product.id} />)
        
        }



        </>
    )

}

export default Products;