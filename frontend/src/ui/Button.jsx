function Button({children,type,onClick}){

    return (
        <button type={type} onClick={onClick} className={`${type==='add'? 'px-32 py-5' : 'px-10 py-3 lg:px-28 lg:py-5' }  bg-black text-xs lg:text-lg text-white rounded-md uppercase shadow-md shadow-white hover:bg-transparent hover:text-black border border-black`}>{children}</button>
    )

}

export default Button;