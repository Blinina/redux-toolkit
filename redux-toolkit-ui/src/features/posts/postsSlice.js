import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
//https://jsonplaceholder.typicode.com/posts


const initialState = {
    posts: []
}
export const getPosts = createAsyncThunk('posts/getPosts', async (_, {rejectWithValue, dispatch})=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(setPosts(res.data))
})

export const removePost = createAsyncThunk('posts/removePost', async (id, {rejectWithValue, dispatch})=>{
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch(setDelitePost(id))
})

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
         setPosts:(state, action)=>{
           state.posts=action.payload
         },
         setDelitePost:(state, action)=>{
            state.posts = state.posts.filter((item)=>item.id!==action.payload)
         }
    }, 
    extraReducers:{
[getPosts.fulfilled]: ()=> console.log('fulfilled'),//fulfilled -выполненный
[getPosts.pending]: ()=> console.log('pending'), //pending - в ожидании
[getPosts.rejected]: ()=> console.log('rejected'), //rejected - отклоненный
[removePost.fulfilled]: ()=> console.log('removePost: fulfilled'),//fulfilled -выполненный
[removePost.pending]: ()=> console.log('removePost: pending'), //pending - в ожидании
[removePost.rejected]: ()=> console.log('removePost: rejected') //rejected - отклоненный
    }
})
export const {setPosts, setDelitePost} = postsSlice.actions
export default postsSlice.reducer