import React, { Component } from "react";


export default class LoginComponent extends Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="login w-[90%] h-[100vh] flex justify-center items-center flex-col gap-4 m-auto capitalize">
                <form action="" className="loginform w-[60%] m-auto  p-[20px] flex flex-col gap-[20px] shadow">
                    <h1 className='text-2xl'><span className='text-[teal] font-semibold'>Login</span></h1>
                    <input type="text" name="" id="" placeholder='Email' required className='w-[70%] h-[40px] border p-[20px] rounded outline-none' />
                    <input type="text" name="" id="" placeholder='Password' required className='w-[70%] h-[40px] border p-[20px] rounded outline-none' />
                    <div>
                        <label htmlFor="" className='flex justify-start items-center  text-left'>
                            <input type="checkbox" name="" id="" />
                            <span className='mx-[10px]'>Remember Me</span>
                        </label>
                    </div>
                    <div className="btncontainer">
                        <button className="btn border rounded px-[20px] py-[10px] bg-[crimson] text-[white]">Login</button>
                    </div>
                    <div className='flex justify-start gap-2'>
                        <p>Don't have any account?</p>
                        <a className='text-[blue] cursor-pointer' onClick={this.props.toggleForm}>Register</a>
                    </div>
                </form>
            </div>
        )
    }
}