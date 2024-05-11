import Section from "../../ui/Section";
import Products from "../products/Products";

function NewArrivals(){
    
    return (
        <div className="py-10">
           <Section tag="From the Collection" heading='New Arrivals' />
            <div className="grid grid-cols-3 gap-2">
              <Products />
          
            </div>
        </div>
    )

}

export default NewArrivals;