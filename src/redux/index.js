import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import gallery from './reducers/index';

const store = createStore(gallery, composeWithDevTools(applyMiddleware(thunk)));
export default store;
