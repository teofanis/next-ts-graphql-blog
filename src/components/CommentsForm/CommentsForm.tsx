import React from 'react'

interface CommentsFormProps {
  slug: string
}

const CommentsForm = ({ slug }: CommentsFormProps) => {
  return (
    <div>
      <h1>Comments Form : {slug}</h1>
    </div>
  )
}

export default CommentsForm
