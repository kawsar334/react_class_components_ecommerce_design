import React, { Component } from "react";
import ProductList from "../../components/product/Product";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { products } from "../../components/data/products";


export default class Products extends Component {
    


    render() {
        return (
            <div>
                <Navbar />
                <h1 className="text-center my-[20px] text-3xl font-semibold">Our product list </h1>
                <div className="flex justify-center items-center flex-wrap gap-[20px] my-4 ">
                    {
                        products.map((item)=>{
                            return(
                                
                                <ProductList item={item} />
                            )
                        })
                    }
                  
                </div>
                <Footer />
            </div>
        )
    }
}