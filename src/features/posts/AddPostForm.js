import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'

function AddPostForm() {
    
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')


  const dispatch = useDispatch()
  const users = useSelector(state => state.users)


  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)


  const onSavePostClicked = () => {
      if(title && content) {
        dispatch(postAdded(title, content,userId))
          setTitle('')
          setContent('')
      }
  }



  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select className="form-control" id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          className="form-control"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
       <br />
        <button className="btn btn-primary" type="button" onClick={onSavePostClicked} >
          Save Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm