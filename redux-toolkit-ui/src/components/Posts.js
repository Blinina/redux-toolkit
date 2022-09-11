import React from 'react'
import PostItem from './PostItem'
import { getPosts } from '../features/posts/postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
const Posts = () => {
const dispatch = useDispatch()
const postList = useSelector((state)=>state.posts.posts)
    return (
        <div>
            <button
                onClick={()=>dispatch(getPosts())}
                type='submit'                         
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            {postList?.map((item)=> <PostItem key={_.uniqueId()} post={item}/>)}
            
        </div>
    )
}

export default Posts
