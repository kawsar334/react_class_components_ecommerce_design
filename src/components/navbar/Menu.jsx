import React from 'react'
import { NavLink } from 'react-router-dom'

const menu = () => {
    const categories = [
        "women",
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
        "clothing"
    ]



    return (
        <div className='flex flex-col w-full gap-3'>
            {categories.map((category, index) => (
                <NavLink
                    key={index}
                    to={`/cat/${category.toLowerCase()}`}
                    className="text-[14px] text-[gray] cursor-pointer border-b"
                >
                    {category}
                </NavLink>
            ))}
        </div>
    )
}

export default menu
