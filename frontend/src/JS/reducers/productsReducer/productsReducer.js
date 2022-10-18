import { GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_SUCCESS } from "../../constants/constProducts";

const initialState = {Products : [],loading : false, error : null}

export const productsReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case GET_ALL_PRODUCTS_LOADING :
            return ({...state,loading : true})
        case GET_ALL_PRODUCTS_SUCCESS : 
            return ({...state,Products : payload, loading : false})
        case GET_ALL_PRODUCTS_FAILED : 
            return ({...state, error : payload, loading: false})
        default: return state
    }
}