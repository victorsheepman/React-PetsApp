import { useState, useReducer} from "react"
import { initialState, reducer } from "../reducer/reducer";

export const initialValue = ()=>{
    const [category, setCategory] = useState('dog');
    const [state, dispatch] = useReducer(reducer, initialState.results); 
    return{

        category, 
        setCategory, 
        state, 
        dispatch
    }
}
