import React,{Component} from "react";



export default class Services extends Component{



    render(){
        return(
            <div>
                <div className="services_items w-[100%]  flex justify-around items-center gap-[30px] flex-wrap p-[20px] my-[40px]">
                    <div className="services_item flex justify-center items-center gap-[20px]">
                        <img src="/e1.png" alt="" className="w-[50px] h-[50px] " />
                        <div className="services_contents">
                            <h2 className="text-3xl font-bold text-[gray]">Free Shipping</h2>
                            <p>Free shipping on all order</p>
                        </div>
                    </div>
                    <div className="services_item flex justify-center items-center gap-[20px]">
                        <img src="/e2.png" alt="" className="w-[50px] h-[50px] " />
                        <div className="services_contents">
                            <h2 className="text-3xl font-bold text-[gray]">Free Shipping</h2>
                            <p>Free delivery </p>
                        </div>
                    </div>
                    <div className="services_item flex justify-center items-center gap-[20px]">
                        <img src="/e3.png" alt="" className="w-[50px] h-[50px] " />
                        <div className="services_contents">
                            <h2 className="text-3xl font-bold text-[gray]">Free Shipping</h2>
                            <p>Free return </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}