// All reducers get two arguments, the current state and action
// Reducers are only ever called when an action occurs
// State argument is not application state, only the state this 
// reducer is responsible for
// If the action has a type of Book Selected, return the selected book,
// if the action is anything else, return the currrent state
export default function(state = null, action) { // if the state is undefined, set it to null
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state;
}