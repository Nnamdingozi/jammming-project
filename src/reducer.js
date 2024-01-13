



export function searchTermReducer(state, action){
    switch(action.type) {
        case 'setSearchTerm' : 
        return {
            ...state, term: action.payload
        }
        default: 
        return state;
    }

}
 

