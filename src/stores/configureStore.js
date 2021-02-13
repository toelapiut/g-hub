import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {initialState, rootReducer} from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';

export const middleware = [
  thunkMiddleware,
];


export const middlewareEnhancer = applyMiddleware(
  ...middleware,
);

export const configureStore = () => {

  if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
  }


  const enhancers = [
    middlewareEnhancer,
  ];


  const composedEnhancers = composeWithDevTools(
    ...enhancers,
  );

  let store = createStore(rootReducer, initialState, composedEnhancers);

  return {
    store,
  };
};
