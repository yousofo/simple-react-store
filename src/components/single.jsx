import { useEffect, useRef, useState,useContext } from "react";
import { useParams } from "react-router-dom";
import { Swiper } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { favState, addFav, btnState, addToCart } from './helperFunctions';
import { cartNum } from './header'


export default function Single() {
  const updateCartNum = useContext(cartNum);
  let favData = JSON.parse(window.localStorage.getItem("fav")) || []
  let data = JSON.parse(window.localStorage.getItem("cart")) || []
  const [product, setProduct] = useState(null)
  const { id: productId } = useParams();
  let swiper = null;

  useEffect(() => {
    if (swiper == null && product != null) {
      swiper = new Swiper(".swiper-single", {
        modules: [Navigation, Pagination],
        spaceBetween: 50,
        slidesPerView: 1,
        pagination: {
          el: `.swiper-pagination-${productId}`,
          bulletActiveClass: "yn-active",
          modifierClass: "yn-pag-",
          type: 'bullets',
          clickable: true,
          bulletClass: "yn-pag",
          renderBullet: function (index, className) {
            return `<img class="${className} w-14 rounded border-2 select-none border-transparent border-solid" src="${product.images[index]}"/>`;
          }
        },
        navigation: {
          nextEl: `.single-next-${product.id}`,
          prevEl: `.single-prev-${product.id}`
        }
      })
    }
    if (!product) {
      fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.ok ? res.json() : false).then(e => e && setProduct(e))
    }
    return () => {
      if (swiper != null) swiper.destroy()
    }
  }, [product]);
  return (
    product ?
      <figure className="text-gray-400  body-font overflow-hidden">
        <div className="container max-w-screen-md px-5 py-24 mx-auto">
          <div className="items-center sm:flex sm:gap-4">
            <div className="swiper swiper-single">
              <div className="swiper-wrapper">
                {product.images.map((e, i) => (
                  <div className="swiper-slide" key={`single-img-${e.id}-${i}`}>
                    <img alt="ecommerce" className="w-full lg:h-auto h-full object-contain object-center rounded select-none" src={`${e}`} />
                  </div>
                ))}
              </div>
              <div className={`swiper-pagination swiper-pagination-${productId}`}></div>

              <div className={`swiper-button-prev single-prev-${productId}`}></div>
              <div className={`swiper-button-next single-next-${productId}`}></div>
            </div>
            <figcaption className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0 flex flex-col gap-2 sm:gap-3">
              <div>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
                <h1 className=" text-3xl title-font font-medium mb-1">{product.title}</h1>
              </div>
              <section className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3 whitespace-nowrap">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                  <a>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </section>
              <p className="leading-relaxed">{product.description}</p>
              <section className="flex items-center gap-3">
                <span className="title-font font-medium text-2xl">$58.00</span>
                <button onClick={(ev) => addToCart([ev, product,data,updateCartNum])} className="flex ms-auto text-white bg-indigo-500 whitespace-nowrap border-0 py-1 px-3 h-fit focus:outline-none hover:bg-indigo-600 rounded">
                  {
                    btnState([product.id,data])
                  }
                </button>
                <button onClick={(ev) => addFav([ev, product.id, favData])} className={`rounded-full p-1.5 bg-gray-200 h-min border-0 inline-flex items-center justify-center transition-all ${favState([product.id, favData])} hover:text-red-500 text-gray-500`}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="pointer-events-none w-4 h-4" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </section>
            </figcaption>
          </div>
        </div>
      </figure>
      : <figure className="m-auto w-fit">loading...</figure>
  );
}
