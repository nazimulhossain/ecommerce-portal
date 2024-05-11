import { useEffect, useState } from "react";

export function useLocalStorage(key,initialState){

    const [value,setValue] = useState(function(){
      
        const storedValue = localStorage.getItem(key);
        if(storedValue) {
          const parsedValue = JSON.parse(storedValue);
          return parsedValue;
        }
        return initialState;
    })


    useEffect(
        function () {
          localStorage.setItem(key, JSON.stringify(value));
        },
        [value, key]
      );
    
      return [value, setValue];

}