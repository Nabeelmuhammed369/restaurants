import{
    RESTAURANTS_LIST_REQUEST,
    RESTAURANTS_LIST_SUCCESS,
    RESTAURANTS_LIST_FAIL
} from '../constants/restaurantConstants'

export const restaurantListReducer=(states={restaurants: []}, action)=>{
    switch(action.type){
        case RESTAURANTS_LIST_REQUEST:
            return{restaurants:[]}
        case RESTAURANTS_LIST_SUCCESS:
            return{restaurants:action.payload}   
            
          case RESTAURANTS_LIST_FAIL:
              return{restaurants:action.payload}  

              default:
                  return states
    }
}