export interface Post {
  title: string
  excerpt: string
  slug: string
  categories: Category[]
  author: Author
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
