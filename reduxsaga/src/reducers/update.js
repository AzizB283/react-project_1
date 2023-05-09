import { UPDATE_NAME } from "../actions/action"

const initialState = {
    name: "Aziz",
    age: 21,
    joke: "",
    news: "",
}

const update = (state=initialState, action) => {
    switch(action.type){
        case 'UPDATE_NAME_SUCCESS' : 
            return {
                ...state,
                name: action.payload,
            }
        
        case 'JOKE_SUCCESS':
            return {
                ...state,
                joke: action.payload,
            }

        case 'NEWS_SUCCESS':
            return {
                ...state,
                news: action.payload,
            }

            
        default : 
        return state;
                        
    }

}

export default update