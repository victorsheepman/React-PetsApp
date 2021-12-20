import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { pets } from "../db";

export const initialState = { 
    results:pets,
} 

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'all':
        return state

        case 'toggle':
        return state.map(pet =>{    
            if(pet.id === action.payload){
                return {
                    ...pet,
                    like: !pet.like
                }
            }else{
                return pet;
            }
        });

      default:
        return state
    }
  }