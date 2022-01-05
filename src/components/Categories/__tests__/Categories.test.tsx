import { Categories } from '@components/index'
import { render } from '@utils/test-utils'
import React from 'react'
import { categories } from '../__fixtures__/categories.json'

describe('Categories Test', () => {
  it('should render correctly', () => {
    const { container } = render(<Categories categories={categories} />)
    expect(container).toMatchSnapshot()
  })
})
