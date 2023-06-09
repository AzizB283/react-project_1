import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import reducers from "./reducers";
import thunk from 'redux-thunk';


const middlewares = [thunk];

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
