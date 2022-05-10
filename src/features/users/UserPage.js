import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {selectAllPosts} from '../posts/postsSlice'
import { Link } from 'react-router-dom'



function UserPage() {
    const {userId } = useParams()
    const user = useSelector((state) => state.users.find((user) => user.id === userId))

    const postsForUser = useSelector(state => {
    const allPosts = selectAllPosts(state)
    return allPosts.filter(post => post.user === userId)
   })

   const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))
        
    
  return (
      <section>
       <h2>{user.name}</h2>
       <ul>{postTitles}</ul>

     </section>
  )
}

export default UserPage