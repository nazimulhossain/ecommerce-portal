function ButtonCheckout({children,type,onClick}){

    return (
        <button type={type} onClick={onClick} className="bg-[#222222] hover:bg-[#090909] text-sm text-white py-5 px-6 rounded-md">{children}</button>
    )

}

export default ButtonCheckout;