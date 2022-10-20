import { DELETE_PRODUCT_FAILED, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCTS_SUCCESS, EDIT_PRODUCT_FAILED, GET_ALL_PRODUCTS_FAILED, GET_ALL_PRODUCTS_LOADING, GET_ALL_PRODUCTS_SUCCESS, GET_ONE_PRODUCTS_LOADING, GET_ONE_PRODUCTS_SUCCESS, GET_ONE_PRODUCT_FAILED, POST_PRODUCTS_SUCCESS, POST_PRODUCT_FAILED } from "../../constants/constProducts"
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

export const getOneProduct = (id) => async dispatch => {
    try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`)
        dispatch({type : GET_ONE_PRODUCTS_SUCCESS,payload : response.data})
    } catch (error) {
        dispatch({type : GET_ONE_PRODUCT_FAILED , payload : error})
        console.log(error.message);
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

export const postProduct = (newProduct,navigate) => async dispatch => {
    try {
        const response = await axios.post(`http://localhost:5000/api/products/add`,newProduct)
        dispatch({type : POST_PRODUCTS_SUCCESS,payload: response.data})
        dispatch(getAllProducts())
        navigate("/")
    } catch (error) {
        dispatch({type : POST_PRODUCT_FAILED , payload : error})
        console.log(error.message);
    }
}

export const editProduct = (id,editProduct,navigate) => async dispatch => {
    try {
        const response = await axios.put(`http://localhost:5000/api/products/${id}`,editProduct)
        dispatch({type : EDIT_PRODUCTS_SUCCESS,payload: response.data})
        dispatch(getAllProducts())
        navigate("/")
    } catch (error) {
        dispatch({type : EDIT_PRODUCT_FAILED , payload : error})
        console.log(error);
    }
}