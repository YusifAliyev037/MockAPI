import React, { createContext, useContext, useReducer, useState } from 'react'
import { TYPES } from './type';



export const globalContext = createContext();

const INITIAL_STATE = {
    favorites: [],
    is_loading: false
}

function reducer(state,action){
    switch(action.type){
        case TYPES.TOGGLE_FAV:
             return {...state, favorites:action.payload };

        case TYPES.IS_LOADING:
            return {...state, is_loading:action.payload }; 

        default:
            return state;  
    }

}


function GlobalProvider({children}) {
    // const [favorits, setFavorits] = useState([]);

    const [state,dispatch] = useReducer(reducer,INITIAL_STATE)

    const value = {
        state,
        dispatch
    }


  return <globalContext.Provider value={value}>{children}</globalContext.Provider>
}


export default GlobalProvider



export const useGlobalStore = ()=>{
    const value = useContext(globalContext);
    return value;
}
