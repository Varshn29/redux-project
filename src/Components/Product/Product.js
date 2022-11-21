import React from "react";
import { Link } from "react-router-dom";

const Product = ({ image, title, category, price, id }) => {
    return (
        <div>
            <Link to={`/products/${id}`}>
                <img src={image} width='250' height='300' />
                <h3>{title}</h3>
                <h2>{category}</h2>
            </Link>
            <p>$ {price}</p>
        </div>
    )
}

export default Product;