

import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { NavLink } from 'react-router-dom'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <Navbar />


                <div className='w-[90%] text-center my-3'>
                    <NavLink to="/" className='text-2xl font-semibold mx-2  '>Home</NavLink>
                    <span className='text-2xl font-semibold'>/</span>
                    <NavLink to="/cart" className=' mx-2 text-2xl font-semibold text-[rebeccapurple]'>Cart</NavLink>
                </div>
                <div className='my-[50px] w-[100%]'>
                    <div className="cartwrapper w-[90%] flex flex-col justify-center items-center  m-auto">
                        <div className="cartitems w-[100%] flex flex-col justify-center  m-auto gap-5 p-5">
                            <div className="cartitem border-b p-3 flex justify-around items-center flex-wrap shadow ">
                                <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg" alt="" className='w-[100px] h-[100px] rounded  object-cover cursor-pointer' />
                                <h2 className='text-2xl font-semibold p-2'>Lorem ipsum jacket</h2>
                                <span className='text-2xl font-semibold p-2'>$100.00</span>
                                <span className='text-2xl font-semibold p-2 cursor-pointer text-[crimson]'>x</span>
                            </div>
                            <div className="cartitem border-b p-3 flex justify-around items-center flex-wrap shadow ">
                                <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg" alt="" className='w-[100px] h-[100px] rounded  object-cover cursor-pointer' />
                                <h2 className='text-2xl font-semibold p-2'>Lorem ipsum jacket</h2>
                                <span className='text-2xl font-semibold p-2'>$100.00</span>
                                <span className='text-2xl font-semibold p-2 cursor-pointer text-[crimson]'>x</span>
                            </div>
                            <div className="cartitem border-b p-3 flex justify-around items-center flex-wrap shadow ">
                                <img src="https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg" alt="" className='w-[100px] h-[100px] rounded  object-cover cursor-pointer' />
                                <h2 className='text-2xl font-semibold p-2'>Lorem ipsum jacket</h2>
                                <span className='text-2xl font-semibold p-2'>$100.00</span>
                                <span className='text-2xl font-semibold p-2 cursor-pointer text-[crimson]'>x</span>
                            </div>
                            
                          
                        </div>
                    </div>
                </div>

                <Footer />



            </div>
        )
    }
}
