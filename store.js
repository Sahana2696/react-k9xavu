import reducer from './reducer';
import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer)
store.subscribe(()=>{
 // localStorage.setItem("store",JSON.stringify(store.getState()))
})
export default store;


