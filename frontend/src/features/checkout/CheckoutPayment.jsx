import RadioInput from "../../ui/RadioInput";
import CheckoutProgress from "./CheckoutProgress";

function CheckoutPayment(){
    return (
        <div className="flex flex-col gap-10">
             <div className="text-xs border border-[#d5d3cd] rounded-md p-4">
                <div className="flex justify-between border-b pb-4 border-[#d5d3cd]">
                    <div className="flex gap-10 items-center">
                        <h3 className="text-[#71706c] text-sm">Contact</h3>
                        <p>test@gmail.com</p>
                    </div>
                       <button className="block">Change</button>
                     </div>
                <div className="flex justify-between py-4 border-b  border-[#d5d3cd]">
                    <div className="flex gap-10 items-center">
                        <h3 className="text-[#71706c] text-sm">Ship to</h3>
                        <p>Shiram Colony,Gwalior,474002,India</p>
                    </div> 
                    <button>Change</button>
                </div>

                <div className="flex gap-8 items-center pt-4">
                    <h3 className="text-sm text-[#71706c]">Shipping <br />method</h3>
                    <p>Express Courier (Air) <span className="font-semibold text-sm">Free</span></p>
                </div>
                
            </div>

            <section>
                <h3 className="mb-2">Payment</h3>
                <p className="text-sm">All transactions are secured and encrypted.</p>
                <div>Payment Block</div>
            </section>

            <section>
                <h3>Billing address</h3>
                <p className="mb-4 text-sm">Select the address that matches your card or payment method.</p>
                <div className="text-sm font-semibold border border-[#d5d3cd] rounded-md ">
                    <div className="flex items-center gap-2 border-b border-[#d5d3cd] p-4">
                        <RadioInput name="billing" id="billing_same" value="same" top={0} checked={true} />
                        <label htmlFor="billing_same" className="text-[#323230]  hover:cursor-pointer ">Same as shipping address</label>
                    </div>

                    <div className="flex items-center gap-2 p-4">
                        <RadioInput name="billing" id="billing_different" value="different" top={0} />
                        <label htmlFor="billing_different" className="text-[#323230]  hover:cursor-pointer">Use a different billing address</label>
                    </div>
                    

                </div>
            </section>

            <div>
                <p className="text-sm text-[#535250]">By clicking below and completing your order, you agree to purchase your item(s) from Global-e as merchant of record for this transaction, on Global-e’s Terms of Sale and Privacy Policy. Global-e is an international fulfilment service provider to Aainagirl.</p>
            </div>
            <CheckoutProgress checkoutButton="Complete order" />
        </div>
    )

}

export default CheckoutPayment;