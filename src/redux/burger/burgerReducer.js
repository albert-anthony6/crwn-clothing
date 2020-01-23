import BurgerActionTypes from './burgerTypes';

const INITIAL_STATE = {
    bool: null
}

const burgerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case BurgerActionTypes.TOGGLE_BURGER_BOOL:
            return{
                ...state,
                bool: !state.bool
            }
        default:
            return state;
    }
}

export default burgerReducer;