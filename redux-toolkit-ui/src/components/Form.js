import React from 'react'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/todos/todoSlice';
const Form = () => {
    const [text, setText] = React.useState('');
    const dispatch = useDispatch()
   
    const handleAddTask = (e)=>{
        e.preventDefault();
        const task = { text, id: _.uniqueId(), completed: false };
        dispatch(addTask({task}));
        console.log(task)
        setText('');
        
    }
    const handleChange = (e) =>{
        setText(e.target.value)
       }
    return (
        <form className='w-full flex' onSubmit={handleAddTask}>
            <input
                onChange={handleChange}
                value={text}
                type='text'
                placeholder='Type something...'
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form
