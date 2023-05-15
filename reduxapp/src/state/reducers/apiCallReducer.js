const initalState = {
    usersData: [],
    isLoading: false,
    isError: false,
  };

const reducer = (state= initalState, action) => {
    switch(action.type){
        case "data": 
        return {
            ...state,
            data: action.payload
        }
    break;

    default:
        // the dispatched action is not in this reducer, return the state unchanged
        return state;
}
}
