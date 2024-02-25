import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from './item';

const Categories = () => {
  const [category, setCategory] = useState([]);
  const { id: cate } = useParams()
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${cate}`)
      .then((res) => res.json())
      .then((json) => { setCategory(json.products); return json })
  }, [cate]);
  return (
    <section className="container px-5 py-24 mx-auto">
      <div className="home-grid grid">
        {
          category.length > 0 ?
            category.map((e,i) => <Item item={e} key={`category-item-${i}`} />)
            : <h1 className="w-full mt-7 text-center">loading</h1>
        }</div>
    </section>
  )
}

export default Categories