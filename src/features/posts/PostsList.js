import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor';
import {ReactionButtons} from './ReactionButtons';

import { TimeAgo } from './TimeAgo';

function PostsList() {
    const posts = useSelector(state => state.posts)

    const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map((post) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <div>
              <PostAuthor userId={post.user} />
              <TimeAgo timestamp={post.date} />
            </div>
            <p className="post-content">{post.content.substring(0, 100)}</p>
            <ReactionButtons post={post} />
            <Link to={`/posts/${post.id}`} className="button muted-button">
              View Post
            </Link>
         </article>
    ))

  return (
    <section className="posts-list">
        <br />
        <h2>Posts</h2>
        <br />
        {renderedPosts}
     </section>

  )
}

export default PostsList