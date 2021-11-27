import Arrows from '@icons/Arrows'
import CalendarIcon from '@icons/CalendarIcon'
import Loader from '@icons/Loader'
import { render, screen, within } from '@utils/test-utils'
import React from 'react'
import { direction } from './__fixtures__/arrows.json'

describe('Icons Tests', () => {
  describe('Calendar Icon Tests', () => {
    it('renders correctly', () => {
      const { container } = render(<CalendarIcon />)
      expect(container).toMatchSnapshot()
    })

    it('should render a calendar SVG icon', () => {
      render(<CalendarIcon />)
      const icon = screen.getByTestId('calendar-icon')
      expect(icon).toBeInTheDocument()
      expect(icon).toBeVisible()
      expect(icon).toHaveAttribute('data-testid', 'calendar-icon')
    })
  })

  describe('Loader Icon Tests', () => {
    it('renders correctly', () => {
      const { container } = render(<Loader />)
      expect(container).toMatchSnapshot()
    })
    it('should render Loader icon', () => {
      const { getByTestId } = render(<Loader />)
      const wrapper = getByTestId('loader-svg')
      expect(wrapper).toBeInTheDocument()
      expect(wrapper.firstChild).toBeTruthy()
      const button = within(wrapper).getByRole('button')
      expect(button).toBeInstanceOf(HTMLButtonElement)
      expect(button).toBeDisabled()
      expect(within(button).getByText('Loading')).toBeInTheDocument()
    })
  })

  describe('Arrow Icon tests', () => {
    it('renders correctly', () => {
      // @ts-ignore
      const { container } = render(<Arrows direction={direction} />)
      expect(container).toMatchSnapshot()
    })
    it('renders a left arrow icon', () => {
      const { getByTestId } = render(<Arrows direction="left" />)
      const arrow = getByTestId('left-arrow-svg')
      expect(arrow).toBeInTheDocument()
      expect(arrow).toBeVisible()
    })

    it('renders a right arrow icon', () => {
      const { getByTestId } = render(<Arrows direction="right" />)
      const arrow = getByTestId('right-arrow-svg')
      expect(arrow).toBeInTheDocument()
      expect(arrow).toBeVisible()
    })

    it('does not render with invalid direction', () => {
      // @ts-expect-error
      render(<Arrows direction="unknown" />)
      const leftArrow = screen.queryByTestId('left-arrow-svg')
      const rightArrow = screen.queryByTestId('right-arrow-svg')
      expect(leftArrow).not.toBeInTheDocument()
      expect(rightArrow).not.toBeInTheDocument()
    })
  })
})
