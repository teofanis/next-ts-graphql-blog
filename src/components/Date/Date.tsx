import React from 'react'
import moment from 'moment'
import CalendarIcon from '@icons/CalendarIcon'

interface DateProps {
  date: string | Date
  format?: string
  withIcon?: boolean
}

const Date = (props: DateProps) => {
  const { date, format, withIcon } = props
  const formattedDate = moment(date).format(format || 'MMM DD, YYYY')
  return (
    <>
      {withIcon && <CalendarIcon />}
      <span>{formattedDate}</span>
    </>
  )
}

export default Date
