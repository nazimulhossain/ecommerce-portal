import Section from "../../ui/Section";
import Products from "../products/Products";

function NewArrivals(){
    
    return (
        <div className="pb-10 pt-[9rem] lg:pt-0">
           <Section tag="From the Collection" heading='New Arrivals' />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-1">
              <Products />
          
            </div>
        </div>
    )

}

export default NewArrivals;