import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cartNum } from './header'
import { addFav, addToCart, btnState, favState } from "./helperFunctions"


const Item = (props) => {

  const updateCartNum = useContext(cartNum);
  let item = props.item
  let data = JSON.parse(window.localStorage.getItem("cart")) || []
  let favData = JSON.parse(window.localStorage.getItem("fav")) || []

  return (
    <figure className={`shadow flex flex-col justify-between p-2 pb-3`}>
      <Link to={`/products/${item.id}`} className={`block relative w-full h-full max-h-60 rounded overflow-hidden`}>
        <img
          alt="ecommerce"
          className={`h-full object-cover w-full`}
          src={item.thumbnail}
        />
      </Link>
      <figcaption className="flex-1 pt-4">

        <section className="flex flex-col justify-center items-center gap-2 h-full">
          <h3 className="tracking-widest title-font text-center mb-auto"  >
            {item.title}
            <span className="italic h-fit text-[11px] font-bold text-emerald-800 ps-1">${item.price}</span>
          </h3>
          <div className='flex gap-3 items-center'>
            <button onClick={(ev) => addFav([ev, item.id, favData])} className={`rounded-full p-1.5 bg-gray-200 border-0 inline-flex items-center justify-center transition-all ${favState([item.id, favData])} hover:text-red-500 text-gray-500`}>
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="pointer-events-none w-4 h-4" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
            <button onClick={(ev) => addToCart([ev, item, data, updateCartNum])} className="flex text-white bg-indigo-500 whitespace-nowrap border-0 py-1 px-3 h-fit focus:outline-none hover:bg-indigo-600 rounded">
              {
                btnState([item.id, data])
              }
            </button>

          </div>
        </section>
      </figcaption>
    </figure>
  )
}

export default Item