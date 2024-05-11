import { MdArrowForwardIos } from "react-icons/md";


function CheckoutBreadcrumb({step}){
    
    return (
        <div className="flex gap-2 text-xs mb-8">
            <div className="flex gap-2 items-center">
                <button>Cart</button>
                <span>
                    <MdArrowForwardIos color="#686868"  />
                </span>
            </div>
            <div className="flex gap-2 items-center">
                <button className={step==='contact_information' ? 'cursor-text text-[#323230] font-semibold' : ''}>Information</button>
                <span>
                    <MdArrowForwardIos color="#686868"/>
                </span>
            </div>
            <div className="flex gap-2 items-center">
                <button className={step==='shipping_method' ? 'cursor-text text-[#323230] font-semibold' : ''}>Shipping</button>
                <span>
                    <MdArrowForwardIos color="#686868" />
                </span>
            </div>
            <div>
             <button className={step==='payment_method' ? 'cursor-text text-[#323230] font-semibold' : ''}>Payment</button>
            </div>
        </div>
    )

}

export default CheckoutBreadcrumb;