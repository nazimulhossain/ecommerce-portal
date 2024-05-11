function RadioInput({id,name,value,top,checked}){

    const className = top === 0 ? "appearance-none w-[16px] h-[16px] rounded-[50%] border-2 border-[#999] relative top-0 transition-all duration-75 ease-linear checked:border-[6px] checked:border-black hover:cursor-pointer"
                        : "appearance-none w-[16px] h-[16px] rounded-[50%] border-2 border-[#999] relative top-4 transition-all duration-75 ease-linear checked:border-[6px] checked:border-black hover:cursor-pointer"

    return (
        <input type="radio" id={id} name={name} value={value} className={className} defaultChecked={checked} />
    )

}


export default RadioInput;