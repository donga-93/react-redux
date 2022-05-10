import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../src/features/posts/postsSlice'
import usersReducer from '../src/features/users/usersSlice'
import notificationsReducer from '../src/features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
     posts: postReducer,
     users: usersReducer,
     notifications: notificationsReducer,
  }
})