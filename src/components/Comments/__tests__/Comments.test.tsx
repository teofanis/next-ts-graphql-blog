import { Comments } from '@components/index'
import * as Services from '@services/index'
import { act, render, screen } from '@utils/test-utils'
import React from 'react'
import { all, slugTest } from '../__fixtures__/comments.json'

const getCommentsMock = jest.fn((slug) => {
  if (slug === 'all') {
    return Promise.resolve(all.comments)
  }
  if (slug === 'slugTest') {
    return Promise.resolve(slugTest.comments)
  }
  return Promise.resolve([])
})

describe('Comments Test', () => {
  it('fetches comments for a given post', async () => {
    jest.spyOn(Services, 'getComments').mockImplementationOnce(getCommentsMock)
    await act(async () => render(<Comments slug="slugTest" />))
    expect(Services.getComments).toHaveBeenCalledTimes(1)
    expect(Services.getComments).toHaveBeenCalledWith('slugTest')
    expect(screen.getAllByTestId('comment-container')).toHaveLength(
      slugTest.comments.length
    )
  })
  it('it does not render if there are no comments', async () => {
    jest.spyOn(Services, 'getComments').mockImplementationOnce(getCommentsMock)
    await act(async () => render(<Comments slug="no-comments-post" />))
    expect(screen.queryByTestId('comments-container')).toBeNull()
  })

  it('renders correctly with comments', async () => {
    jest.spyOn(Services, 'getComments').mockImplementationOnce(getCommentsMock)
    await act(async () => render(<Comments slug="all" />))
    expect(screen.getAllByTestId('comment-container')).toHaveLength(
      all.comments.length
    )

    expect(
      screen.getByText(`${all.comments.length} Comments`)
    ).toBeInTheDocument()
    all.comments.forEach((comment) => {
      expect(screen.getByText(comment.comment)).toBeInTheDocument()
    })
  })
})
