import { Author } from '@interfaces/app.interfaces'
import React from 'react'

interface AuthorProps {
  author: Author
}
const Author = ({ author }: AuthorProps) => {
  return (
    <div>
      <h1>Author</h1>
    </div>
  )
}

export default Author
