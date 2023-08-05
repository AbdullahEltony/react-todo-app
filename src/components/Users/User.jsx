import React, { useState } from 'react'


import { useEffect } from 'react'
import defaultIMg from '../../assetes/imgs/default1.jpg'

const User = () => {
    const [users,setUsers] = useState([])
    const [user,setUser] = useState(false)
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/users?limit=9')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])

    const showUsers = ()=>{
      setUser(true)
    }
  return (
     <div className='my-5'>
        <button onClick={showUsers} className='btn btn-primary w-100'>Get All Users</button>
        {user?<div className="row g-3 w-100 p-3 bg-light">
          {users.map(user=>{
          return <div className='col-sm-6 col-md-4' key={user.id}>
            <div className="shadow-sm py-3">
              <img src={user.id ===4 || user.id===5 || user.id===10? defaultIMg:user.avatar} alt="user-img" className='img-fluid mb-3' style={{height:'396.26px',objectFit:'cover'}} />
              <h2>{user.name}</h2>
              <h4>{user.role}</h4>
              <h6>{user.email}</h6>
            </div>
           </div>
        
          })}
         </div> :''}
    
     </div>
  )
}

export default User;