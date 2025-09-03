import React, { useState } from 'react'
import './style.css'
import ProductCard from './ProductCard';

const ProductList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const productsData = [
        { id: 1, name: "MacBook Pro", price: 1299.99, category: "Electronics", image: "https://i.pinimg.com/750x/f3/b5/8f/f3b58f860a9e8487e2eb7e853e1f4f8e.jpg" },
        { id: 2, name: "Cotton T-Shirt", price: 19.99, category: "Clothing", image: "https://deeds.pk/cdn/shop/files/WhatsAppImage2024-05-22at5.37.58PM_1.jpg?v=1716484358" },
        { id: 3, name: "Ceramic Coffee Mug", price: 12.99, category: "Home", image: "https://c2c.com.pk/cdn/shop/files/IMG_2024012516094515.jpg?v=1706186769&width=416" },
        { id: 4, name: "Wireless Headphones", price: 89.99, category: "Electronics", image: "https://vention.pk/cdn/shop/files/2-12.png?v=1715008832" },
        { id: 5, name: "React JS Guide", price: 34.99, category: "Books", image: "https://www.printique.com/wp-content/uploads/2019/07/hardcover-photo-books.jpg" },
        { id: 6, name: "Running Shoes", price: 79.99, category: "Clothing", image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/719a9938-c96a-49c4-81b5-0a290630688e/AIR+JORDAN+1+LOW+SE.png" },
        { id: 7, name: "Desk Lamp", price: 24.99, category: "Home", image: "https://5.imimg.com/data5/SELLER/Default/2024/3/395866116/LR/UD/OB/124837732/led-study-table-lamp-500x500.jpg" },
        { id: 8, name: "Python Programming", price: 29.99, category: "Books", image: "https://media.licdn.com/dms/image/v2/D5612AQE3BF0sYN9F5w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1685095062135?e=2147483647&v=beta&t=8-NVRt7Y4euylzTh2h8vHPazWS7acwGsa8T5MEhqgDo" }
    ];

    const filteredProduct = selectedCategory === 'All' ? productsData : productsData.filter(product => product.category === selectedCategory);


    return (
        <>

            <div className="product-list-container">
                <header className="text-center mb-8">
                    <h1>Our Products</h1>
                    <p>Find your perfect items from our collection</p>
                </header>

                <div className="filters-container">
                    <button onClick={() => setSelectedCategory('All')} className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}>All</button>
                    <button onClick={() => setSelectedCategory('Electronics')} className={`filter-btn ${selectedCategory === 'Electronics' ? 'active' : ''}`}>Electronics</button>
                    <button onClick={() => setSelectedCategory('Clothing')} className={`filter-btn ${selectedCategory === 'Clothing' ? 'active' : ''}`}>Clothing</button>
                    <button onClick={() => setSelectedCategory('Home')} className={`filter-btn ${selectedCategory === 'Home' ? 'active' : ''}`}>Home</button>
                    <button onClick={() => setSelectedCategory('Books')} className={`filter-btn ${selectedCategory === 'Books' ? 'active' : ''}`}>Books</button>
                </div>

                <div className="products-grid">
                    {
                        filteredProduct.map(product => (

                            <ProductCard
                                key={product.id}
                                name={product.name}
                                price={product.price}
                                category={product.category}
                                image={product.image}
                            />

                        )
                        )
                    }
                </div>

                {filteredProduct.length === 0 && (
                    <div className="empty-state">
                        <div>😢</div>
                        <h3>No products found</h3>
                        <p>Try selecting a different category</p>
                    </div>
                )}

                <div className="results-count">
                    Showing {filteredProduct.length} of {productsData.length} products
                </div>
            </div>
        </>
    )
}

export default ProductList