import { DELETE_PRODUCT_FAILED, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_SUCCESS } from "../../constants/constProducts"
import axios from "axios"

export const getAllProducts = () => async dispatch => {
    dispatch({type : GET_ALL_PRODUCTS_LOADING})
    try {
        const response = await axios.get('http://localhost:5000/api/products')
        dispatch({type : GET_ALL_PRODUCTS_SUCCESS,payload : response.data})
    } catch (error) {
        dispatch({type : GET_ALL_PRODUCTS_FAILED,payload : error})
        console.log(error.message)
    }
}

export const deleteProduct = (id) => async dispatch => { 
    try {
        const response = await axios.delete(`http://localhost:5000/api/products/${id}`)
        dispatch({type : DELETE_PRODUCT_SUCCESS, payload: response.data})
        dispatch(getAllProducts())
    } catch (error) {
        dispatch({type : DELETE_PRODUCT_FAILED , payload : error})
        console.log(error.message);
    }
}