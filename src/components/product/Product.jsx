


import React, { Component } from 'react';
import "./product.scss";
import { NavLink } from 'react-router-dom';

export default class ProductList extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            
            <NavLink to={`/details/${this.props.item.id}`} id='product' className='w-[270px] h-[400px]   shadow bg-[white] rounded cursor-pointer product_cart '>
                <div className="carttop w-[100%] h-[70%] relative bg-[#f6f6f6] flex justify-center items-center p-[10px]">
                    <span className='absolute right-[10px] top-[5px] bg-[rebeccapurple] text-white px-2 rounded cursor-pointer'>{this.props.item.new ? "New ":""}</span>
                    <img src={this.props?.item?.images[0]||"/images/3.jpg"} alt="Loading..." className='w-[60%] h-[60%] object-cover bg-[#f6f6f6] rounded' />
                <div className="cartanim flex flex-col justify-center items-center gap-2">
                        <img src={this.props.item.images[1] || "/images/3.jpg"} alt="Loading..." className='w-[60%] h-[60%] object-cover bg-[#f6f6f6] rounded' />
                        <NavLink to={`/details/${this.props?.item?.id}`} className="bg-[#a749ff] p-2 w-[100%] border rounded text-[white] text-center cart_link">See more <i className="fa-regular fa-eye"></i></NavLink>
                </div>
                </div>
                <div className="cartbottom flex flex-col gap-[10px] my-[20px] justify-center items-center ">
                    <h4 className='text-2xl font-semibold '>{this.props.item.title}</h4>
                    <p className="price text-2xl font-semibold text-[#ec6e3b]">${this.props.item.price}</p>
                </div>
            </NavLink>
           
        )
    }
}