import React from 'react'
import { useDispatch } from 'react-redux'
import {removePost } from '../features/posts/postsSlice'
const PostItem = (post) => {
    console.log(post)
    const dispatch = useDispatch();

    const hadlerRemove = (id) =>{
dispatch(removePost(id))
    }
    return (
        <div onClick={()=>hadlerRemove(post.post.id)} className='flex w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
        {post.post.title}</div>
    )
}

export default PostItem
