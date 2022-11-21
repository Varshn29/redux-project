import { GET_ALL_PRODUCT, GET_ALL_PRODUCT_FAILURE, GET_ALL_PRODUCT_SUCCESS } from './constants'
import axios from 'axios';

export const getAllProduct = () => {
    return {
        type: GET_ALL_PRODUCT
    }
}

export const getAllProductSuccess = (data) => {
    return {
        type: GET_ALL_PRODUCT_SUCCESS,
        payload: data
    }
}

export const getAllProductFailure = (error) => {
    return {
        type: GET_ALL_PRODUCT_FAILURE,
        payload: error
    }
}

export const productsList = () => {
    return (dispatch) => {
    dispatch(getAllProduct())

    axios.get('https://fakestoreapi.com/products')
        .then(res => dispatch(getAllProductSuccess(res.data)))
        .catch(err => dispatch(getAllProductFailure(err)))
    }
}