import { Author as AuthorInterface } from '@interfaces/app.interfaces'
import Image from 'next/image'
import React from 'react'

interface AuthorProps {
  author: AuthorInterface
}
const Author = ({ author }: AuthorProps) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-2 -top-14">
        <Image
          alt={author.name}
          className="align-middle rounded-full"
          src={author.photo.url}
          width={100}
          height={100}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  )
}

export default Author
