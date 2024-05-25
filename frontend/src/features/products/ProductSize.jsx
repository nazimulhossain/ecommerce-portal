function ProductSize({size,setChooseSize,chooseSize}){


    const isSelected = chooseSize===size ? "w-[40px] h-[40px] rounded-[50%]  border border-black flex items-center justify-center bg-black text-white uppercase text-xs"
                                : "w-[40px] h-[40px] rounded-[50%]  border border-black flex items-center justify-center uppercase text-xs";


    
    
    return (
        <>
            <div onClick={()=> setChooseSize(size)} className={isSelected}>{size}</div>
        
        </>
    )

}

export default ProductSize;