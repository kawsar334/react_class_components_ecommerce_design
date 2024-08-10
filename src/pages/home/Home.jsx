import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Services from '../../components/services/Services'
import ProductList from '../../components/product/Product'
import "./home.scss"
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'
import { products } from '../../components/data/products'

export default class Home extends Component {


    constructor() {
        super()
        this.state = {
            products: products
        }
    }

    filterProducts =(type)=>{
        if(type=== "new"){
            return products.filter((item)=>item.new === true)
        }else if(type=== "old"){
            return products.filter((item)=>item.new === false );
            
        }else{
            return products ;
        }

    }


// 
    handleFilter = (type) => {
       this.setState({products:this.filterProducts(type)});
    }

    render() {

        return (
            <div>
                <Navbar />
                <Banner />
                <Services />
                <div className='flex flex-col justify-center items-center my-[100px] '>
                    <h1 className='text-5xl capitalize font-semibold my-[20px] product_header'>Our products</h1>
                    <div className='flex gap-[10px] p-[10px] my-[30px]'>
                        <button className='border rounded px-4 py-2 bg-black text-[white] border-[black] hover:bg-transparent hover:text-[black] transition-all ease-in 1s  capitalize' onClick={() => this.handleFilter("new")}>New products</button>

                        <button className='border rounded px-4 py-2 bg-black text-[white] border-[black] hover:bg-transparent hover:text-[black]  capitalize transition-all ease-in 1s ' onClick={() => this.handleFilter("old")}>old products</button>
                    </div>
                    <div className='cart_container  w-[90vw] h-auto m-auto flex justify-center items-center flex-wrap gap-[20px] p-5 '>
                        {
                            this.state.products.slice(0, 8).map((item) => (
                                <ProductList item={item} />
                            ))
                        }
                    </div>
                </div>

                <Categories />



                <Footer />
            </div>
        )
    }
}
