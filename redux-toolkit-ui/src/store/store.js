import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../features/users/usersSlice'
import { todoSlice } from '../features/todos/todoSlice'
import postsSlice from '../features/posts/postsSlice'
export const store = configureStore({
    reducer: {
      user: userSlice.reducer,
      todo: todoSlice.reducer,
      posts: postsSlice
    }
  })

