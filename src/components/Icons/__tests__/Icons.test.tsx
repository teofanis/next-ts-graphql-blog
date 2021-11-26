import CalendarIcon from '@icons/CalendarIcon'
import { render, screen } from '@utils/test-utils'
import React from 'react'
describe('Icons Tests', () => {
  it('Renders a Calendar SVG Icon', () => {
    render(
      <div data-testid="wrapper">
        <CalendarIcon />
      </div>
    )
    const wrapper = screen.getByTestId('wrapper').firstChild
    expect(wrapper).toBeInTheDocument()
  })
})
