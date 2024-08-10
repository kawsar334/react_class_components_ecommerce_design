import React from 'react'
import { categoryItems } from '../data/data';
import "./category.scss"
import { NavLink } from 'react-router-dom';

const Categories = () => {
  return (
    <>
      <h1 className='text-center capitalize text-3xl font-semibold my-3'>product categories </h1>
    <div className='category'>
      <div className='cat_wrapper'>
        {categoryItems.map((item) => (
          <NavLink to={`/cat/${item.name}`} className={`cat_item m-[10px] `}>
            <img src={item.img} alt="" className='w-[300px] border rounded' />
            {/* <h1>{item.name}</h1> */}
          </NavLink>
        ))}
      </div>
    </div>
    </>
  )
};
export default Categories


// import React from 'react'
// import { categoryItems } from '../data/data'

// const Categories = () => {
//   return (
//     <div className='w-[100%] flex justify-center items-center flex-wrap '>
//       <div className='w-[90%] flex justify-center items-center flex-wrap gap-3'>
//         {categoryItems.map((item) => (
//           <div className='m-[10px]'>
//             <img src={item.img} alt="" className='w-[300px] border rounded' />
//             <h1>{item.name}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// };
// export default Categor