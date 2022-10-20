import { DELETE_PRODUCT_FAILED, GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_SUCCESS, GET_ONE_PRODUCTS_SUCCESS, GET_ONE_PRODUCT_FAILED, POST_PRODUCTS_SUCCESS } from "../../constants/constProducts";

const initialState = {Products : [],loading : false,oneProduct : {} , error : null}

export const productsReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case GET_ALL_PRODUCTS_LOADING :
            return ({...state,loading : true})
        case GET_ALL_PRODUCTS_SUCCESS : 
            return ({...state,Products : payload, loading : false})
        case GET_ALL_PRODUCTS_FAILED : 
            return ({...state, error : payload, loading: false})
        case DELETE_PRODUCT_FAILED:
            return ({...state, error : payload, loading: false})
        case GET_ONE_PRODUCTS_SUCCESS:
            return ({...state,oneProduct : payload, loading : false})
        case GET_ONE_PRODUCT_FAILED:
            return ({...state, error : payload, loading: false})
        
        default: return state
    }
}