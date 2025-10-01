import React from 'react'

function BlogPagePost({params}) {
  return (
    <main>
        <h1>Blog Post</h1>
        <p>{params.slug}</p>
    </main>
  )
}

export default BlogPagePost