import store from './store';
import {bugAdded, bugRemoved} from './actions'
store.subscribe(() => {
    console.log("Store State Changed", store.getState());
})

store.dispatch(bugAdded("Bug 1"))
console.log(store.getState())

store.dispatch(bugRemoved(1))
console.log(store.getState())

