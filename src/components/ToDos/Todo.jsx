import React, {useRef, useState } from 'react'
import './todos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import shortid from 'shortid'

const Todo = () => {
    
  const [todos,setTodos] = useState([])
  const [title,setTitle] = useState('')
  const [btnStatus,setBtnStatus] = useState('add')
  const [temp,setTemp] = useState('')

  const getTitle = (value)=>{  // get value form input
  setTitle(value)
  } 

  const date = new Date() // get date of task
  let day = date.getDate(),month = date.getMonth() +1 , year = date.getFullYear(),
    hours = date.getHours() , minuts = date.getMinutes();
    hours = hours>12?hours-12:hours;
  let fullDate = `${day}/ ${month} / ${year} | ${hours}:${minuts}`

  const newtask = {               // craete new object form tasks
    id:shortid.generate(),
    taskTitle:title,
    taskDate:fullDate,
    isDone:false
  }

  const addNewTask = ()=>{      // add new task to arrary
    if(title!=='') {
      if(btnStatus==='add') {
        setTodos([...todos,newtask])
      }else {
        updateTodoTitle(temp)
        setBtnStatus('add')
      }
      setTitle('')
    }
  }


  function updateTodoTitle(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, taskTitle: title }; // Update the taskTitle key of the matching object
      }
      return todo; // Return the original object for all other objects in the array
    });
    setTodos(updatedTodos); // Set the state variable to the updated array
  }

  function updateTodoStatus(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }; // Update the isDone key of the matching object
      }
       return todo; // Return the original object for all other objects in the array
    });
    setTodos(updatedTodos); // Set the state variable to the updated array
    
      
  }



  const handleDelete = (id)=>{
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  const inputRef = useRef(null)
  const handleUpdate = (id)=>{
  const targitElem =  todos.find(todo=>todo.id===id)
  inputRef.current.focus()
  setTitle(targitElem.taskTitle)
  setBtnStatus('apduate')
  setTemp(id)
  }

  const checkIsDone = (id)=>{
    updateTodoStatus(id);
  }

  return (
    <div className="todo-container">
        <div className='row justify-content-center w-100 my-5 todos'>
        <div className="col-md-9 col-lg-7">
            <h2 className='mb-3'>My Todos</h2>
            <div className="todo-header bg-primary p-2 text-start position-relative">
                <input type="text" className='w-100 py-3 px-2' placeholder='add new task' onChange={(e)=>getTitle(e.target.value)} value={title} ref={inputRef}/>
                <button onClick={addNewTask} className="addNew btn btn-primary">{btnStatus==='add'?<FontAwesomeIcon icon={faPlus} />:<FontAwesomeIcon icon={faPencil}/>}</button>
            </div>
            {todos.map(todo=>{
                return <div className="todo-body" key={todo.id}>
                        <div className={`todo-item ${todo.isDone?'done':''}`}>
                        <div className="todo-titel">
                           <h2 className={`${todo.isDone?'text-decoration-line-through fw-light':''}`}>{todo.taskTitle}</h2>
                            <h6>{todo.taskDate}</h6>
                        </div>
                        <div className="todo-control">

                            <button id='isDone' onClick={()=>checkIsDone(todo.id)} className={todo.isDone?'bg-warning':'bg-success'}>{todo.isDone? <FontAwesomeIcon icon={faXmark}/>: <FontAwesomeIcon icon={faCheck} />}</button>
                            <button id='Delete' onClick={()=>handleDelete(todo.id)} className='bg-danger'>{<FontAwesomeIcon icon={faTrashCan} />}</button>
                            <button id='Update' onClick={()=>handleUpdate(todo.id)} className='bg-info'>{<FontAwesomeIcon icon={faPencil} />}</button>
                        </div>
                        </div>
                 </div>
            })}
        </div>
    </div>
    </div>
  )
}

export default Todo