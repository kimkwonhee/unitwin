import { langkr } from './langkr'
import { langen } from './langen'

const SETKR =  'changlang/SETKR'
const SETEN =  'changlang/SETEN'

const initialState = { 
    langskr : langkr,
    langsen : langen,
    curlang : langkr
}

export const changkr = () => ({ type : SETKR});
export const changen = () => ({ type : SETEN});


export default function changlang (state = initialState, action) {
    switch (action.type) {
        case SETKR :
            return {
                ...state,
                curlang : state.langskr
            }
        case SETEN :
            return {
                ...state,
                curlang : state.langsen
            }
        default : 
            return state;
    }
}