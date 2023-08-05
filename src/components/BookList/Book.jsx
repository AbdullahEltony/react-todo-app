import React, {useState } from 'react'
import { BoodData } from './BookData';
export const Book = (probs) => {
  const [items, setItems] = useState(probs.data);
  const [lists,setList] = useState(BoodData.length)

    function delteItem() {
      setItems(prev => ({ ...prev, id: 0 }));
     setList(prevlenth => prevlenth - 1);
    }
    const {id,img, title, price} = items;
  return (
    <>
    {lists >= 0 ? (
      id !== 0 && (
        <div className="col-sm-6 mb-3 col-md-4">
          <div className='bg-white p-3'>
            <img src={img} alt="img" className='img-fluid' />
            <h3 className='my-3'>{title} </h3>
            <button className='btn btn-warning'>{price}</button>
            <button onClick={delteItem} className='btn btn-outline-danger mt-3 w-100'>Remove</button>
          </div>
        </div>
      )
    ) : (
      <h2>lists is empty</h2>
    )}
  </>
  )
}
