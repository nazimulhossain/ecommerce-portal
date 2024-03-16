import { createContext, useContext, useState } from "react";

const IconSizeContext = createContext();


function IconSizeProvider({children}){

    const [iconSize] = useState(20);

    return <IconSizeContext.Provider value={{iconSize}}>{children}</IconSizeContext.Provider>

}

function useIconSize(){
    const context = useContext(IconSizeContext);
    return context;
}

export {useIconSize,IconSizeProvider}



