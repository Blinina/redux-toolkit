import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask } from '../features/todos/todoSlice';
import { removeTask } from '../features/todos/todoSlice';
const TodoItem = ({todo}) => {
    const dispatch = useDispatch();

    const hadlerComplet = (id)=>{
        dispatch(completeTask(id))
    }
    const hadlerRemove = (id)=>{
        dispatch(removeTask(id))
    }
    return (
        <div className='flex justify-between items-center my-2'>
            <div onClick={()=>hadlerComplet(todo.id)} className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </div>
            <div className={`text-sm ${todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
                {todo.text}
            </div> 
            <div onClick={()=>hadlerRemove(todo.id)} className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
        
    )
}

export default TodoItem
