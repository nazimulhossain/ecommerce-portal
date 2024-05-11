import CurrencySelector from "./CurrencySelector";
function PromoBar(){
    return(
        <div className="bg-[#fbe9ab] py-2 px-6 text-sm grid grid-cols-[1fr_auto] hover:cursor-pointer">
            <p className="text-center text-black">now through Sunday, take 25% off select styles with code FLASH25</p>
            <CurrencySelector />
        </div>
    )

}

export default PromoBar;