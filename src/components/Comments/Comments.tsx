import { Date } from '@components/index'
import { Comment } from '@interfaces/app.interfaces'
import { getComments } from '@services/index'
import parse from 'html-react-parser'
import React, { useEffect } from 'react'

interface CommentsProps {
  slug: string
}

const Comments = ({ slug }: CommentsProps) => {
  const [comments, setComments] = React.useState<Comment[]>([])
  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [slug])
  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                <Date date={comment.createdAt || ''} />
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
