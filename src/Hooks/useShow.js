import { useState } from "react"
import { initialValue } from "./InitialValue";
export const useShow = () => {
    const [catShow, setCatShow] = useState(false);
    const [dogShow, setDogShow] = useState(true);
    const {setCategory} = initialValue()

    
    return {
        catShow,
        dogShow,
        setCatShow,
        setDogShow
    }
}