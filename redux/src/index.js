import store from './store';
import {bugAdded, bugRemoved, bugResolve} from './actions'
store.subscribe(() => {
    console.log("Store State Changed", store.getState());
})
store.dispatch(bugAdded("Bug 1"))
console.log(store.getState())

store.dispatch(bugResolve(1))
console.log(store.getState())

store.dispatch(bugRemoved(1))
console.log(store.getState())




