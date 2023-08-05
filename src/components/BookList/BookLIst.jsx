import React, { useState } from 'react'
import { Book } from './Book'
import { BoodData } from './BookData'
const BookLIst = () => {
    const [items,setItems] = useState(BoodData)

    function removeAll() {
      setItems([])
    }
  return (
    <div className='w-100 rounded bg-dark p-4 mx-auto row'>
      <h2 className='text-white mb-4'>Book Lists</h2>
        {items.map(item => {
          return <Book data={item} key={item.id}/>
        })}
       {items.length <=0? <h2 className='text-white'>Book List is Empty</h2>:<button onClick={removeAll} className='btn btn-danger'>Remove All</button>} 
    </div>
  )
}

export default BookLIst