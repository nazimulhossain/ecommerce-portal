import ProductList from "./ProductList";
import { useProducts } from "./useProducts";

function Products({size}){

    const {products,isPending} = useProducts(4);

    return (
        <>

        {isPending ? <h2>Loading....</h2> 
        
        : 
        
        size===1 ? <ProductList product={products[0]} /> :products?.slice(0,3).map((product)=> <ProductList product={product} key={product.productId} />)
        
        }



        </>
    )

}

export default Products;