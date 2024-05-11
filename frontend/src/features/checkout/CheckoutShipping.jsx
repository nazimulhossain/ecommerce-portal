import { useNavigate } from "react-router-dom";
import RadioInput from "../../ui/RadioInput";
import CheckoutProgress from "./CheckoutProgress";
import { useLocalStorage } from "../../hooks/useLocalStorage";


function CheckoutShipping(){

    const [value] = useLocalStorage("user");
    
    const navigate = useNavigate();

    const OnPaymentHandler =()=> {

        navigate("/checkout?step=payment_method")

    }

    return (
        <div className="flex flex-col gap-11">
            <div className="text-xs border border-[#d5d3cd] rounded-md p-4">
                <div className="flex justify-between border-b pb-4 border-[#d5d3cd]">
                    <div className="flex gap-10 items-center">
                        <h3 className="text-[#71706c] text-sm">Contact</h3>
                        <p>{value ? value.email : ''}</p>
                    </div>
                       <button className="block">Change</button>
                     </div>
                <div className="flex justify-between pt-4">
                    <div className="flex gap-10 items-center">
                        <h3 className="text-[#71706c] text-sm">Ship to</h3>
                        <p>Shiram Colony,Gwalior,474002,India</p>
                    </div> 
                    <button>Change</button>
                </div>
                
            </div>
            <div>
                <h2 className="mb-6">Shipping method</h2>
                <div className="text-sm flex justify-between items-center border border-[#d5d3cd] rounded-md p-4">
                    <div className="flex gap-4">
                    <RadioInput id="shipping" name="shipping" value="express" checked={true}/>
                        <div className="flex flex-col gap-1 text-[#71706c]">
                            <h3>Express Courier (Air)</h3>
                            <p>4 to 6 business days</p>
                            <p>Prepaymnet of duties and taxes supported</p> 
                        </div>
                    </div>
                    <div className="font-semibold">Free</div>
                </div>

            </div>
            <div>
                <h2 className="mb-4">Duties and taxes</h2>
                <div className="text-sm border border-[#d5d3cd] divide-y divide-solid divide-[#d5d3cd] rounded-md p-4">
                <div className="flex justify-between items-center">
                    <div className="flex  gap-4 mb-4 text-[#71706c]">
                       <RadioInput id="online" name="payment" value="online payment" checked={true} />
                        <div>
                            <h3>Pay now</h3>
                            <p>No additional fees on delivery</p>
                        </div>
                    </div>
                    <div className="font-semibold">Rs. 176376</div>
                 </div>

              
               
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 mt-4 text-[#71706c]">
                        <RadioInput name="payment" id="cod" value="cash on delivery" />
                        <div>
                            <h3>Pay on delivery</h3>
                            <p>Additional fees may apply</p>
                        </div>
                    </div>
                    <div className="font-semibold">Rs. 176376</div>
                 </div>

                 </div>
                

            </div>
            <CheckoutProgress checkoutButton="Continue to payment" onClick={OnPaymentHandler}/>
        </div>
    )

}

export default CheckoutShipping;