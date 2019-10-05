export default function(state={}, action){
    switch(action.type){
        case "BLOGS_LOADING_STATUS":
            return {
                 ...state,
                 loadingReducer:action.payload
            }

            default:
                return state
    }
}
