import { configureStore } from '@reduxjs/toolkit'
import postsReducers from '../features/posts/postsSlice'
import usersReducers from '../features/users/usersSlice'
import notificationsReducers from '../features/notifications/notificationsSlice'

export default configureStore({
  reducer: {
    posts: postsReducers,
    users: usersReducers,
    notifications: notificationsReducers,
  },
})
