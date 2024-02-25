import { useEffect, useState } from "react";
import Item from "./item";
import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Home() {
  const [products, setProducts] = useState([]);
  let swiper = null;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products))
  }, []);

  useEffect(() => {
    if (swiper == null) {
      swiper = new Swiper(".swiper-home", {
        modules: [Navigation, Pagination, Autoplay],
        spaceBetween: 0,
        speed: 500,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: `.home-pagination`,
          clickable: true,
        },
        navigation: {
          nextEl: ".home-next",
          prevEl: ".home-prev"
        }
      })
    }
    return () => {
      if (swiper != null) swiper.destroy()
    }
  }, []);
  return (
    <div className="container home mx-auto">
      <div className="swiper swiper-home overflow-hidden select-none">
        <div className="swiper-wrapper ">
          <div className="swiper-slide px-2 w-full max-h-[65vh] relative">
            <img src="/images/couch.jpg" className="w-full h-full  object-cover" alt="" />
            <div className="absolute font-semibold flex gap-1 sm:gap-4 flex-col uppercase left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <p className="italic text-xl md:text-4xl whitespace-nowrap">up to 50% sale</p>
              <h2 className="text-2xl md:text-5xl whitespace-nowrap">summer sale!</h2>
              <button className="w-fit text-sm uppercase bg-amber-600 py-3 px-8 mt-1 sm:mt-3">shop now</button>
            </div>
          </div>
          <div className="swiper-slide px-2 w-full max-h-[65vh] relative">
            <img src="/images/couch2.jpg" className="w-full h-full  object-cover" alt="" />
            <div className="absolute font-semibold flex gap-1 sm:gap-4 flex-col uppercase left-14 top-1/2 -translate-y-1/2 text-white">
              <p className="italic text-xl md:text-4xl whitespace-nowrap">up to 50% sale</p>
              <h2 className="text-2xl md:text-5xl whitespace-nowrap">summer sale!</h2>
              <button className="w-fit text-sm uppercase bg-amber-600 py-3 px-8 mt-1 sm:mt-3">shop now</button>
            </div>
          </div>
          <div className="swiper-slide px-2 w-full max-h-[65vh] relative">
            <img src="/images/couch.jpg" className="w-full h-full  object-cover" alt="" />
            <div className="absolute font-semibold flex gap-1 sm:gap-4 flex-col uppercase left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <p className="italic text-xl md:text-4xl whitespace-nowrap">up to 50% sale</p>
              <h2 className="text-2xl md:text-5xl whitespace-nowrap">summer sale!</h2>
              <button className="w-fit text-sm uppercase bg-amber-600 py-3 px-8 mt-1 sm:mt-3">shop now</button>
            </div>
          </div>
          <div className="swiper-slide px-2 w-full max-h-[65vh] relative">
            <img src="/images/couch2.jpg" className="w-full h-full  object-cover" alt="" />
            <div className="absolute font-semibold flex gap-1 sm:gap-4 flex-col uppercase left-14 top-1/2 -translate-y-1/2 text-white">
              <p className="italic text-xl md:text-4xl whitespace-nowrap">up to 50% sale</p>
              <h2 className="text-2xl md:text-5xl whitespace-nowrap">summer sale!</h2>
              <button className="w-fit text-sm uppercase bg-amber-600 py-3 px-8 mt-1 sm:mt-3">shop now</button>
            </div>
          </div>
          
        </div>
        <div className={`swiper-pagination home-pagination`}></div>
        <div className="swiper-button-prev home-prev ms-3 text-white"></div>
        <div className="swiper-button-next home-next me-3 text-white"></div>
      </div>
      <div className="home-grid grid gap-2 pb-3">
        {
          products.length > 0 ?
            products.map((e, i) => <Item item={e} key={`home-${e.id}`} />)
            : <h1 className="w-full mt-7 text-center">loading</h1>
        }
      </div>
    </div>
  );
}
