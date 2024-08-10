import React from 'react'
import ProductList from '../../components/product/Product'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { products } from '../../components/data/products'

const Categories = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const items = products.filter(product =>
        product.categories.includes(cat.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <div className='w-[100vw] flex justify-center items-center gap-3 flex-wrap my-3'>
                {items.length > 0 ? (
                    items.map(item => (
                        <ProductList item={item} key={item.id} />
                    ))
                ) : (
                    <p className='text-5xl my-8 font-semibold capitalize mx-3'>No products found in this category</p>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Categories
