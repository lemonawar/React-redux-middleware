import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
//import rootReducer from './modules/index'
import rootReducer from '../reducers/index'
import storeLogger from '../middlewares/storeLogger'
import rootSaga from '../sagas/index'

export default () => {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [storeLogger, thunk, sagaMiddleware]
    const enhancer = applyMiddleware(...middlewares)
    const store = createStore(rootReducer, enhancer)
    sagaMiddleware.run(rootSaga)

    //const store = createStore(modules);
    // const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__();
    // const store = createStore(modules, devTools);
    return store
}