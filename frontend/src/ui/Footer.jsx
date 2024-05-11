import CurrencySelector from "./CurrencySelector";
import InputEmail from "./InputEmail";

function Footer(){

    return (
        <div className="grid grid-cols-[1fr_0.5fr] justify-between px-24 py-10 text-black bg-[#fbf8f1]">
            <div className="flex gap-20">

            
            <div>
                <h3 className="font-medium mb-6">Categories</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                       <a href="#">Salwar Kameez</a> 
                    </li>
                    <li>
                        <a href="#">Sarees</a>
                    </li>
                    <li>
                        <a href="#">Lehenga</a>
                    </li>
                    
                </ul>
            </div>
           
            <div>
                <h3 className="font-medium mb-6">Help</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Shipping & Handling</a></li>
                    <li><a href="#">Return & Exchanges</a></li>

                </ul>
            </div>
            <div>
                <h3 className="font-medium mb-6">Follow</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Pinterest</a>
                    </li>
                </ul>
            </div>
            </div>
            <div className="flex flex-col gap-6 mb-6">
                <h3 className="text-3xl">Postcards from Aainagirl</h3>
                <p className=" text-sm">Join us as we galavant around the planet sending back news, ideas and adventures. Subscribe to receive 10% off your first full-priced purchase.</p>
                <InputEmail />
            </div>
            <div className="text-xs">
                <CurrencySelector />
            </div>
            <ul className="flex gap-8 text-xs">
                <li>
                &#169; Aainagirl2024
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Shipping Policy</a>
                </li>
                <li>
                    <a href="#">Terms & Conditions</a>
                </li>
            </ul>

        </div>
    )

}

export default Footer;