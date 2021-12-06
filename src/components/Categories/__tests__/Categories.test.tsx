import { Categories } from '@components/index'
import * as Services from '@services/index'
import { act, render, screen } from '@utils/test-utils'
import React from 'react'
import { categories } from '../__fixtures__/categories.json'

// mock return of getCategories
const getCategoriesMock = jest.fn(() => {
  return Promise.resolve(categories)
})

describe('Categories Test', () => {
  it('fetches categories when it mounts', async () => {
    jest
      .spyOn(Services, 'getCategories')
      .mockImplementationOnce(getCategoriesMock)
    await act(async () => render(<Categories />))
    expect(screen.getByText(/Categories/i)).toBeInTheDocument()
    expect(Services.getCategories).toHaveBeenCalledTimes(1)
  })

  it('renders fetched categories as links', async () => {
    jest
      .spyOn(Services, 'getCategories')
      .mockImplementationOnce(getCategoriesMock)
    await act(async () => render(<Categories />))
    const renderedLinks = screen.getAllByTestId('category-link-container')
    expect(renderedLinks.length).toBe(categories.length)
    categories.forEach((category) => {
      expect(screen.getByText(category.name)).toBeInTheDocument()
    })
    renderedLinks.forEach((link, index) => {
      expect(link).toHaveAttribute('href')
      expect(link.getAttribute('href')).toBe(
        `/category/${categories[index].slug}`
      )
    })
  })
})
