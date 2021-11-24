import React from 'react'

interface ArrowsProps {
  direction: 'left' | 'right'
}

const Arrows = ({ direction }: ArrowsProps) => {
  const leftArrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  )

  const rightArrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white w-full"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  )
  if (direction === 'left') {
    return leftArrowSVG
  } else if (direction === 'right') {
    return rightArrowSVG
  }

  return null
}

export default Arrows
