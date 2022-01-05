import { Author } from '@components/index'
import { render, within } from '@utils/test-utils'
import React from 'react'
import { author } from './__fixtures__/author.json'

describe('Author Test', () => {
  it('renders correctly', () => {
    const { container } = render(<Author author={author} />)
    expect(container).toMatchSnapshot()
  })
  it('displays author details', () => {
    const { getByTestId } = render(<Author author={author} />)
    const authorDetails = getByTestId('author-details')
    expect(authorDetails).toBeInTheDocument()
    expect(authorDetails).toBeVisible()
  })

  it('displays the author name and bio', () => {
    const { getByTestId } = render(<Author author={author} />)
    const authorDetails = getByTestId('author-details')
    expect(authorDetails).toHaveTextContent(author.name)
    expect(authorDetails).toHaveTextContent(author.bio)
  })

  it('displays the author image', () => {
    const { getByTestId } = render(<Author author={author} />)
    const authorDetails = getByTestId('author-details')
    const image = within(authorDetails).getByRole('img')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
  })
})
