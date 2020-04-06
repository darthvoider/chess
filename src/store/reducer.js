import {SET_ALL_VARIATIONS,
    INCREMENT_ACTIVE_COMBINATION_NUMBER, DECREMENT_ACTIVE_COMBINATION_NUMBER} from './types';
export const initialState = {
    allVariations: [],
    size: 8,
    activeCombinationNumber: 0
};

export function reducer(state, action) {
    switch (action.type) {
        case SET_ALL_VARIATIONS:
            return {...state, allVariations: action.allVariations};
        case INCREMENT_ACTIVE_COMBINATION_NUMBER:
            return {...state, activeCombinationNumber: state.activeCombinationNumber + 1};
        case DECREMENT_ACTIVE_COMBINATION_NUMBER:
            return {...state, activeCombinationNumber: state.activeCombinationNumber - 1};
        default:
            return state;
    }
}
