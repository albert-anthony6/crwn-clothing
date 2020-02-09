import {createSelector} from 'reselect';

const selectBurger = state => state.burger;

export const selectBurgerBool = createSelector(
    [selectBurger],
    burger => burger.bool
);