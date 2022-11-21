import { GET_ALL_PRODUCT, GET_ALL_PRODUCT_FAILURE, GET_ALL_PRODUCT_SUCCESS } from "../action/constants"

const initialState = {
    isLoading: false,
    productList: [],
    error: null
}

export const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT: {
            return { ...state, isLoading: true }
        }
        case GET_ALL_PRODUCT_SUCCESS: {
            return { ...state, productList: action.payload, isLoading: false }
        }
        case GET_ALL_PRODUCT_FAILURE: {
            return { ...state, error: action.payload, isLoading: false }
        }
        default: return state;
    }
}