import { useState, useReducer, useEffect} from "react"
import { initialState, reducer } from "../reducer/reducer";
import { useLocalStorage } from "./useLocalStorage";

export const initialValue = ()=>{
    const [category, setCategory] = useState('dog');
    const [state, dispatch] = useReducer(reducer, initialState.results);
    const [storedValue, setLocalStorage] = useLocalStorage('storage', state);
    if(state !== storedValue){
        useEffect(() => {
            console.log('cambiio el stado');
        }, [])
    }
    
    return{

        category, 
        setCategory, 
        state, 
        dispatch
    }
}
