import React, { Component } from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
    render() {

        const productCategories = ["women",
            "jacket",
            "men",
            "shirt",
            "shoes",
            "accessories",
            "kids",
            "t-shirt",
            "electronics",
            "pants",
            "unisex",
            "clothing"]
        return (
            <div className="footer">
                <div className="footeritems">
                    <h2>My Company</h2>
                    <p>© 2024 My Company</p>
                    <p>All Rights Reserved</p>
                </div>
                <div className="footeritems">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                <div className="footeritems">
                    <h2>Products</h2>
                    <ul>
                        {productCategories.slice(0 , 5).map((item)=>(
                            <li><NavLink to={`/cat/${item}`} key={item}>{item}</NavLink></li>

                        ))}
                       
                    </ul>
                </div>
                <div className="footeritems">
                    <h2>Resources</h2>
                    <ul>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">API Reference</a></li>
                        <li><a href="">FAQ</a></li>
                    </ul>
                </div>
                <div className="footeritems">
                    <h2>Follow Us</h2>
                    <ul>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                        <li><a href="">Instagram</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
