import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'; // import the rootReducer that we created
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; // ????
import thunk from 'redux-thunk';

export default function configureStore(initialState){ // export configureStore function
  return createStore( // createStore using redux function
    rootReducer, // the rootReducer we created
    initialState, // the initialState that can be passed into this function
    applyMiddleware(thunk, reduxImmutableStateInvariant()) // apply middleware
  );
}