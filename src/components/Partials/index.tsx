import { Author } from '@interfaces/app.interfaces'
import Image from 'next/image'
import React from 'react'

interface PostedByProps {
  author: Author
}

export const PostedBy = ({ author }: PostedByProps) => {
  return (
    <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
      <Image
        src={author.photo.url}
        alt={author.name}
        width={30}
        height={30}
        className="align-middle rounded-full"
      />
      <p className="inline align-middle text-gray-700 ml-2 text-lg">
        {author.name}
      </p>
    </div>
  )
}

export default { PostedBy }
