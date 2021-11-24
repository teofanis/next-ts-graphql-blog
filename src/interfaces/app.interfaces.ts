import { RichTextContent } from '@graphcms/rich-text-types'

export interface Post {
  title: string
  excerpt: string
  slug: string
  categories: Category[]
  author: Author
  content: {
    raw: RichTextContent
  }
  featuredPost: boolean
  featuredImage: {
    url: string
  }
  createdAt: Date
}

export interface Category {
  name: string
  slug: string
}

export interface Author {
  name: string
  bio: string
  photo: {
    url: string
  }
}

export interface Comment {
  name: string
  email: string
  comment: string
  slug: string
}
