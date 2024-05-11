function Button({children,type,onClick}){

    return (
        <button type={type} onClick={onClick} className={`${type==='add'? 'px-28' : 'px-24' } py-5 bg-black text-white rounded-md uppercase shadow-md shadow-white hover:bg-transparent hover:text-black border border-black`}>{children}</button>
    )

}

export default Button;