/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */
//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
import allReducer from './reducers/index.js'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


//暴露store
export default createStore(allReducer,applyMiddleware(thunk))
// export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))


