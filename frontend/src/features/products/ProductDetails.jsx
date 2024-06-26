
// bg-[#f8f2e3]

import ProductAccordion from "./ProductAccordion";
import ProductList from "./ProductList";
import Products from "./Products";

function ProductDetails(){
    return (
        <div className="bg-[#efc7c2] flex lg:grid lg:place-items-center">
            <div className="w-[90%] m-10 py-20 px-14 flex flex-col bg-[#f8f2e3] lg:grid lg:grid-cols-[0.65fr_0.35fr] lg:gap-10 ">
                <div>
                    <h3 className="mb-6">Description</h3>
                    <ul className="list-disc list-inside mb-8">
                        <li>Novelty pointelle stitch with hand beaded detail allover dress and trims</li>
                        <li>Fully lined</li>
                    </ul>
                    <ProductAccordion />

                </div>
                <div>
                    <h2 className="mb-4">Complete the Look</h2>
                    <Products size={1} />
                </div>

            </div>
           

        </div>
    )

}

export default ProductDetails;