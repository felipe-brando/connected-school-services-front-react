import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';

// // on importe les middlewares
// import debugMiddleware from 'src/middlewares/debug';
// import APIMiddleware from 'src/middlewares/api';
// import websocketMiddleware from 'src/middlewares/websocket';

// // on met bout à bout tous nos middlewares
// const middlewares = applyMiddleware(
//   // debugMiddleware,
//   APIMiddleware,
//   websocketMiddleware,
// );

// on met bout à bout le redux devtools et nos middlewares
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const enhancers = composeEnhancers(middlewares);

// on crée le store à qui l'on passe le reducer et les middlewares (avec le devtool)
//const store = createStore(reducer, enhancers);
const store = createStore(reducer);

export default store;