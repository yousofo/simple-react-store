import React, { useEffect, useState } from 'react'
import {addFav,favState} from "./helperFunctions"


const FavList = () => {
  let favs = JSON.parse(window.localStorage.getItem("fav")) || [];
  const [data, setData] = useState([])
  useEffect(() => {
    favs.map(e => fetch(`https://dummyjson.com/products/${e}`)
    .then(e => e.json()).then(e => setData(pre => [...pre, e])))
  }, [])
  return (
    <article className='container py-10 m-auto'>
      <ul className='grid home-grid'>
        {
          data.length ?
            data.map((e, i) =>
              <li key={`favlist${i}`} className='flex flex-col sm:flex-row justify-between items-center shadow-sm p-4 text-gray-800'>
                <img className='m-auto sm:m-0 w-40 object-contain' src={`${e.thumbnail}`} alt="" />
                <div className='text-center'>
                  <p>{e.title}<span className="italic h-fit text-[11px] font-bold text-emerald-800 ps-1">${e.price}</span></p>
                  <p>{e.stock} in stock</p>
                </div>
                <button onClick={(ev) => addFav([ev, e.id, favs.length])} className={`rounded-full  bg-gray-200  p-1.5 border-0 inline-flex items-center justify-center transition-all ${favState([e.id, favs])} hover:text-red-500 text-gray-500`}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="pointer-events-none w-4 h-4" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </li>
            )
            : <h1 className='w-fit text-4xl m-auto'>No favourite items yet, add some!</h1>
        }
      </ul>
    </article>
  )
}

export default FavList