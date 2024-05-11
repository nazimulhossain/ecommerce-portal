import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

function EmptyCart(){

    const navigate = useNavigate();

    return (
        
            <div className="flex flex-col gap-6 items-center">
                <h2 className="text-3xl">Your Bag is Empty</h2>
                <p>We highly recommend the New Arrivals...</p>
                <Button type="add" onClick={()=>navigate("/")}>Go Shopping</Button>
            </div>
       
    )

}

export default EmptyCart;