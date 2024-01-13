



const initialState = { term: ""}
export function searchTermReducer(state=initialState, action){
    switch(action.type) {
        case 'setSearchTerm' : 
        return {
            ...state, term: action.payload
        }
        default: 
        return state;
    }

}
 

