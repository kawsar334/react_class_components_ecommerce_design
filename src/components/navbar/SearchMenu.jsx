
import React, { Component } from 'react';
import { products } from '../data/products';

export default class SearchMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            filteredProducts: [],
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchText !== this.state.searchText) {
            const filtered = products.filter(item =>
                item.title.toLowerCase().includes(this.state.searchText.toLowerCase())
            );
            this.setState({ filteredProducts: filtered });
        }
    }

    handleInputChange = (event) => {
        this.setState({ searchText: event.target.value });
    };

    render() {
        return (
            <div className='relative w-full h-full p-4 flex justify-center items-center gap-3 rounded '>
                <input
                    type="text"
                    placeholder='Search Product'
                    className='px-3 py-3 w-[70%] rounded border outline-none'
                    value={this.state.searchText}
                    onChange={this.handleInputChange}
                />
                <i className="fa-solid fa-magnifying-glass text-[30px] border rounded p-2 cursor-pointer"></i>
                <i
                    className="fa-solid fa-xmark absolute right-[40px] top-[0px] cursor-pointer text-[crimson] text-2xl"
                    onClick={this.props.handleSearch}
                ></i>

                {/* Render your filtered products */}
                {/* <ul>
                    {this.state.filteredProducts.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul> */}
            </div>
        );
    }
}




// import React, { Component } from 'react'
// import { products } from '../data/products'

// export default class SearchMenu extends Component {

//     constructor(props){
//         super(props)
//     }

//     render() {
//         const text = "sho ";
//         const title = products.filter((item) =>
//             item.title.toLowerCase().includes(text.toLowerCase())
//         );
//         console.log(title);

//     return (
//         <div className='relative w-full h-full p-4 flex justify-center items-center gap-3 rounded '>
//             <input type="text" placeholder='search Product' className='px-3 py-3 w-[70%] rounded border outline-none' />
//             <i className="fa-solid fa-magnifying-glass text-[30px] border rounded p-2 cursor-pointer"></i>
//             <i className="fa-solid fa-xmark absolute right-[5px] top-[0px] cursor-pointer text-[crimson] text-2xl " onClick={this.props.handleSearch}></i>
//         </div>
//     )
//   }
// }


