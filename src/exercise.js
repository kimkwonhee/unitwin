import { createStore } from 'redux'

const initialState = {
    langskr : '',
    langsen : '', 
}

const CHANGKR = "CHANGKR"
const CHANGEN = "CHANGEN"

const changekr = () => ({
    type : CHANGKR
})

const changeen = () => ({
    type : CHANGEN
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGKR :
            return {
                ...state,
                langskr : state.langskr
            };
        case CHANGKR : 
            return {
                ...state,
                langsen : state.langsen
            }
        default :
            return state;
    }
}

const store = createStore(reducer);

const listener = () => {
    const state = store.getState();
}

const unsubscribe = store.subscribe(listener);

store.dispatch(changekr());
store.dispatch(changeen());