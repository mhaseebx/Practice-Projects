import React from 'react'

const ProductCard = ({name, price, category, image}) => {
    return (
        <>

            <div className="product-card">
                <div className="product-image">
                    <img src={image}  />
                </div>

                <div className="product-info">
                    <span className="category-badge">{category}</span>

                    <h3 className="product-name">{name}</h3>

                    <div className="product-footer">
                        <span className="product-price">{price}</span>

                        <button className="add-to-cart-btn">
                            <span>Add to Cart</span>
                            <span>🛒</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard