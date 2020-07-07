let lastId = 0;
import * as actions from './actionTypes'
export default function reducer(state = [], action){
    if (action.type === actions.BUG_ADDED)
    return [...state,{
        id: ++lastId,
        description: action.payload.description,
        resolved: false
    }];

    else if (action.type === actions.BUG_REMOVED)
    return state.filter( bug => bug.id !== action.payload.id );

    else if (action.type === actions.BUG_RESOLVE)
    return state.map( bug => bug.id === action.payload.id ? {...bug, resolved: true} : bug)
    return state;
}