import CurrencySelector from "./CurrencySelector";
function PromoBar(){
    return(
        <div className="bg-[#fbe9ab] py-2 px-6 text-xs sm:text-base grid grid-cols-[1fr_auto] items-center hover:cursor-pointer">
            <p className="text-center text-black">summer sale: enjoy upto 40% off</p>
            <CurrencySelector />
        </div>
    )

}

export default PromoBar;