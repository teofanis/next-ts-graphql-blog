import React from 'react'

interface CommentsProps {
  slug: string
}

const Comments = ({ slug }: CommentsProps) => {
  return <div>Comments : {slug}</div>
}

export default Comments
