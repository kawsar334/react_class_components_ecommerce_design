import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.scss";
import Menu from './Menu';
import SearchMenu from './SearchMenu';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            openMenu: false,
            openLogin: false,
            openSearch: false,
        };
    }
    // toggle navbar 
    handleNavShow = () => {
        this.setState({ open: !this.state.open });
    }

    // toggle menu's
    handlMenueshow = () => {
        this.setState({ openMenu: !this.state.openMenu })

    }
    // toogle login menu
    handleLoginmenus = () => {
        this.setState({ openLogin: !this.state.openLogin })
    }

    // toggle search 
    handleSearch = () => {
        this.setState({ openSearch: !this.state.openSearch })
    }
    render() {
        return (
            <div className='navbar h-[70px] shadow  flex justify-around items-center z-30 bg-[white]'>
                <NavLink to="/" className='logo text-4xl font-bold cursor-pointer text-[black]  p-3'>Flone</NavLink>
                {this.state.open && (<ul className='navlists gap-[20px] relative'>
                    <span className='absolute right-2 top-1'><i className="fa-solid fa-xmark text-3xl cursor-pointer menu_btn text-[red]" onClick={this.handleNavShow}></i></span>
                    {/* <li>
                        <NavLink className="text-[20px]" to="/">Home</NavLink>
                    </li> */}
                    <li className='relative ' onClick={this.handlMenueshow}>
                        <span className="text-[20px] cursor-pointer "  >Categories <i class="fa-solid fa-caret-down"></i> </span>
                        {this.state.openMenu && <div className='absolute p-[20px] text-[#918f8f] bg-[white] left-[-20px]  top-[40px] w-[400px] shadow'>
                            <Menu />
                        </div>}

                    </li>
                    <li>
                        <NavLink className="text-[20px]" to="/products">Products</NavLink>
                    </li>

                </ul>)}
                <ul className='navright flex gap-[20px]'>
                    <li>
                        <NavLink className="p-2" to="/cart"><i className="fa-regular fa-heart text-[30px]"></i> </NavLink>
                    </li>
                    <li className='relative '>
                        <span className="p-2 cursor-pointer" to="/" onClick={this.handleSearch}><i className="fa-solid fa-magnifying-glass text-[30px]"></i></span>
                        {this.state.openSearch && <div className='absolute w-[600px] h-[100px] bg-[white]  right-0 top-[-10px] z-40 flex justify-center items-center shadow searchbar  rounded '>
                            <SearchMenu handleSearch={this.handleSearch} />
                        </div>}
                    </li>
                    <li className='relative cursor-pointer' onClick={this.handleLoginmenus}>
                        <i className="fa-regular fa-user text-[30px]"></i>
                        {this.state.openLogin && <div className='absolute p-[20px]  bg-[white] left-[-50px]  top-[40px] w-[200px] shadow flex flex-col gap-3 '>
                            <NavLink to="/login" className="border-b ">Login</NavLink>
                            <NavLink to="/login" className="border-b ">Register</NavLink>
                        </div>}
                    </li>
                </ul>

                <div className='menu_icons'>
                    {!this.state.open ? <button onClick={this.handleNavShow}><i className="fa-solid fa-bars menu_btn text-2xl"></i></button> :
                        <button><i className="fa-solid fa-xmark text-3xl cursor-pointer menu_btn text-[crimson]" onClick={this.handleNavShow}></i></button>}
                </div>
            </div>
        );
    }
}
