import { Date } from '@components/index'
import { render, within } from '@utils/test-utils'
import React from 'react'

describe('Date Test', () => {
  it('renders correctly', () => {
    const { container } = render(<Date date={'2021-10-28'} />)
    expect(container).toMatchSnapshot()
  })

  it('formats the date by default', () => {
    const date = '2021-10-28'
    const { container } = render(<Date date={date} />)
    expect(container.textContent).toBe('Oct 28, 2021')
  })

  it('formats the date by a given format', () => {
    const format = 'DD MMM YYYY'
    const date = '2021-10-28'
    const { container } = render(<Date date={date} format={format} />)
    expect(container.textContent).toBe('28 Oct 2021')
  })

  it('can render with a calendar icon', () => {
    const format = 'DD MMM YYYY'
    const date = '2021-10-28'
    const { container } = render(
      <Date date={date} format={format} withIcon={true} />
    )
    expect(container.textContent).toBe('28 Oct 2021')
    expect(container.querySelector('svg')).toBeTruthy()
    expect(within(container).getByTestId('calendar-icon')).toBeVisible()
  })
})
