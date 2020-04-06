import {SET_ALL_VARIATIONS,INCREMENT_ACTIVE_COMBINATION_NUMBER, DECREMENT_ACTIVE_COMBINATION_NUMBER} from './types';

export const setAllVariations = allVariations => ({
    type: SET_ALL_VARIATIONS,
    allVariations
});

export const incrementActiveCombinationNumber = () => ({
    type: INCREMENT_ACTIVE_COMBINATION_NUMBER
});

export const decrementActiveCombinationNumber = () => ({
    type: DECREMENT_ACTIVE_COMBINATION_NUMBER
});
