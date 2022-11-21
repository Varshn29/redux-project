import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsList } from "../../redux/action/listAction";
import Product from "../Product/Product";

const ProductList = () => {

    const productsData = useSelector(state => state.listOfProducts);

    const { isLoading, productList } = productsData;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsList())
    }, [])

    return (
        <div>
            {isLoading ? <h2>Loading......</h2> :
            productList?.map((item, i) => {
                return (<Product {...item} key={i} />)
            })}
        </div>
    )
}

export default ProductList;