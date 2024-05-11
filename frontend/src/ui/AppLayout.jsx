import { Outlet } from "react-router-dom";
import Header from "./Header";


import PromoBar from "./PromoBar";
import { getCartOpenStatus} from "../features/cart/cartSlice";
import { useSelector } from "react-redux";
import Footer from "./Footer";

function AppLayout(){
    const isCartOpen = useSelector(getCartOpenStatus);
    return (
        <div className={isCartOpen ? "h-dvh bg-[#fbf8f1] overflow-hidden" : "h-dvh bg-[#fbf8f1]"}>
            <PromoBar />
            <Header />
            <main className="bg-[#fbf8f1]">
                <Outlet />
            </main>
            <Footer />
           
        </div>
    )

}

export default AppLayout;