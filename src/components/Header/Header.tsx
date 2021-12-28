import { ThemeSwitcher } from '@components/index'
import { Category } from '@interfaces/app.interfaces'
import { getCategories } from '@services/index'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    getCategories().then((categories) => setCategories(categories))
  }, [])
  return (
    <div
      className="container mx-auto px-10 mb-8"
      data-testid="header-wrapper-container"
    >
      <div className="border-b w-full inline-block dark:border-gray-600 border-blue-400 py-8">
        <div className="items-center md:float-left flex justify-between">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-4xl text-white">
              GraphCMS
            </span>
          </Link>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.slug}
              passHref
            >
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
