import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./details.scss";
import { useLocation } from 'react-router-dom';
import { products } from '../../components/data/products';
import ProductList from '../../components/product/Product';
export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lgImg: "",
            smImg: ""
        }
    }
    handleImg = (item) => {
        this.state.lgImg = {
            item
        }
    }
    render() {
        const id = this.props.id;
        const product = products.find((item) => item.id.toString() === id);
        this.state.lgImg = product.images[0]
        if (!product) {
            return (
                <div className='text-2xl '>Product Not Found !</div>
            )
        }
        const cat = product.categories[0] || product.categories[1]
        const relatedProducts = products.filter((item) => item.categories.includes(cat.toLowerCase()))

        return (
            <div>
                <Navbar />
                <div className="details w-[100%] h-[100vh]  ">
                    <div className='detailswrapper w-4/5 shadow h-full m-auto flex justify-center items-center gap-4 rounded'>
                        <div className="detailsleft w-[35%] h-full my-9 flex justify-center items-center flex-col gap-[20px]">
                            <img src={this.state.lgImg || product.images[1]} alt="" className="detailsLgImg w-[100%] h-[400px] object-cover rounded" />
                            <div className="images flex justify-center items-center flex-wrap gap-3">

                                {
                                    product.images.length > 0 && product?.images?.map((i) => (
                                        <img src={i} alt="" className='w-[100px] h-[100px] object-cover rounded cursor-pointer' onClick={() => this.handleImg(i)} />
                                    ))
                                }

                                {/* <img src={product.images[1]} alt="" className='w-[100px] h-[100px] object-cover rounded cursor-pointer' /> */}

                            </div>
                        </div>
                        <div className="detailsright w-[55%] p-7">
                            <h1 className="title text-3xl font-semibold capitalize my-4">{product.title}</h1>
                            <p>$11.2 </p>
                            <p className="desc border-b py-3 my-3">{product.desc}</p>
                            <div className="colors flex justify-start items-center gap-4 my-5 flex-wrap">
                                <h3 className='text-2xl capitalize '>colors:</h3>
                                {product.colors.map((i) => (

                                    <span className={`w-[20px] h-[20px]  bg-[${i}] rounded-[50%] border`} key={i}></span>
                                ))}
                                {/* <span className='w-[20px] h-[20px]  bg-[gray] rounded-[50%] border'></span>
                            <span className='w-[20px] h-[20px]  bg-[red] rounded-[50%] border'></span>
                            <span className='w-[20px] h-[20px]  bg-[crimson] rounded-[50%] border'></span> */}
                            </div>
                            <div className="colors flex justify-start items-center gap-4 my-5 flex-wrap">
                                <h3 className='text-2xl capitalize '>Sizes:</h3>
                                {product.sizes.map((i) => (
                                    <span className='border px-3 py-1 rounded text-2xl bg-[crimson] text-[white] cursor-pointer'>{i}</span>
                                ))}
                                {/* <span className='border px-3 py-1 rounded text-2xl bg-[crimson] text-[white] cursor-pointer'>xxl</span>
                            <span className='border px-3 py-1 rounded text-2xl bg-[crimson] text-[white] cursor-pointer'>M</span> */}
                            </div>
                            <div className="colors flex justify-start items-center gap-4 my-5 flex-wrap">
                                <span className='border px-3 py-1 rounded text-2xl cursor-pointer'>+</span>
                                <span className='border px-3 py-1 rounded text-2xl cursor-pointer'>0{product.quantity}</span>
                                <span className='border px-3 py-1 rounded text-2xl cursor-pointer'>-</span>
                                <button className='py-4 px-9 border cursor-pointer rounded hover:bg-[rebeccapurple] hover:text-[white] text-2xl capitalize '>Add To cart</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="relatedproduts">

                </div>
                <h1 className='text-center text-3xl m-5'>Related products .</h1>
                <div className='flex justify-center items-center gap-3 flex-wrap'>
                {
                    relatedProducts.slice(0, 4).map((item)=>(
                        <ProductList  item={item} key={item.id}/>
                    ))
                }
                </div>


                <Footer />
            </div>
        )
    }
}
// import React, { Component } from 'react';
// import Navbar from '../../components/navbar/Navbar';
// import Footer from '../../components/footer/Footer';
// import "./details.scss";
// import { products } from '../../components/data/products';

// export default class Details extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             lgImg: "",
//             smImg: ""
//         };
//     }

//     componentDidMount() {
//         this.loadProduct();
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.id !== this.props.id) {
//             this.loadProduct();
//         }
//     }

//     loadProduct() {
//         const id = this.props.id;
//         const product = products.find(item => item.id.toString() === id);
//         if (product) {
//             this.setState({ lgImg: product.images[0] });
//         }
//     }

//     handleImg = (img) => {
//         this.setState({ lgImg: img });
//     }

//     render() {
//         const product = products.find(item => item.id.toString() === this.props.id);

//         if (!product) {
//             return (
//                 <div className='text-2xl '>Product Not Found !</div>
//             );
//         }

//         return (
//             <div>
//                 <Navbar />
//                 <div className="details w-[100%] h-[100vh]  ">
//                     <div className='detailswrapper w-4/5 shadow h-full m-auto flex justify-center items-center gap-4 rounded'>
//                         <div className="detailsleft w-[35%] h-full my-9 flex justify-center items-center flex-col gap-[20px]">
//                             <img
//                                 src={this.state.lgImg || product.images[1]}
//                                 alt=""
//                                 className="detailsLgImg w-[100%] h-[400px] object-cover rounded"
//                             />
//                             <div className="images flex justify-center items-center flex-wrap gap-3">
//                                 {product.images.length > 0 && product.images.map((img, index) => (
//                                     <img
//                                         key={index}
//                                         src={img}
//                                         alt=""
//                                         className='w-[100px] h-[100px] object-cover rounded cursor-pointer'
//                                         onClick={() => this.handleImg(img)}
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="detailsright w-[55%] p-7">
//                             <h1 className="title text-3xl font-semibold capitalize my-4">{product.title}</h1>
//                             <p>$11.2 </p>
//                             <p className="desc border-b py-3 my-3">{product.desc}</p>
//                             <div className="colors flex justify-start items-center gap-4 my-5 flex-wrap">
//                                 <h3 className='text-2xl capitalize '>colors:</h3>
//                                 {product.colors.map((color, index) => (
//                                     <span
//                                         key={index}
//                                         className={`w-[20px] h-[20px]  bg-[${color}] rounded-[50%] border`}
//                                     ></span>
//                                 ))}
//                             </div>
//                             <div className="sizes flex justify-start items-center gap-4 my-5 flex-wrap">
//                                 <h3 className='text-2xl capitalize '>Sizes:</h3>
//                                 {product.sizes.map((size, index) => (
//                                     <span
//                                         key={index}
//                                         className='border px-3 py-1 rounded text-2xl bg-[crimson] text-[white] cursor-pointer'
//                                     >
//                                         {size}
//                                     </span>
//                                 ))}
//                             </div>
//                             <div className="actions flex justify-start items-center gap-4 my-5 flex-wrap">
//                                 <span className='border px-3 py-1 rounded text-2xl cursor-pointer'>+</span>
//                                 <span className='border px-3 py-1 rounded text-2xl cursor-pointer'>0{product.quantity}</span>
//                                 <span className='border px-3 py-1 rounded text-2xl cursor-pointer'>-</span>
//                                 <button className='py-4 px-9 border cursor-pointer rounded hover:bg-[rebeccapurple] hover:text-[white] text-2xl capitalize '>Add To cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         );
//     }
// }
