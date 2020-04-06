import {createStore} from 'redux';
import {reducer, initialState} from './reducer';

const configureStore = (state = initialState) => createStore(reducer, state);

export const store = configureStore();
