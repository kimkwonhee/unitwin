import { langkr } from './langkr'
import { langen } from './langen'

const SETKR =  'changlang/SETKR'
const SETEN =  'changlang/SETEN'


export const changkr = () => ({ type : SETKR});
export const changen = () => ({ type : SETEN});


const initialState = {
    langskr : langkr,
    langsen : langen,
    curlang : langkr
}

export default function changlang (state = initialState, action) {
    switch (action.type) {
        case SETKR :
            return {
                ...state,
                curlang : state.change
            }
        case SETEN :
            return {
                ...state,
                curlang : state.change
            }
        default : 
            return state;
    }
}