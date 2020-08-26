import React from 'react'
import "./Product.css"

function Product({id,title,price,rating,image}) {
    return (
        <div className="product">
            <p className="product_title">
                {title}
            </p>
            <p className="product_title">
                {price}
            </p>
            <div className="product_rating">
                {
                    Array(rating).fill().map(()=>{return <p>*</p>})
                }
            </div>
        </div>
    )
}

export default Product
