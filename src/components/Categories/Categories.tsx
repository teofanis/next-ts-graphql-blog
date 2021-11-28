import { Category } from '@interfaces/app.interfaces'
import { getCategories } from '@services/index'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    getCategories().then((categories) => setCategories(categories))
  }, [])

  return (
    <div className="bg-white dark:bg-gray-500 shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.slug} passHref>
          <span className="cursor-pointer block pb-3 mb-3 hover:underline">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
