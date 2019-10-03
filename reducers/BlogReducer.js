

export default function (state={}, action){
    switch(action.type){
        case "BLOGS_FETCH":
            
            return {
                ...state, 
                blogsList:action.payload
            }

        default:
            return state
    }
}