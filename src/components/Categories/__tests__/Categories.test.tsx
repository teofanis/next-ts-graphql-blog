import { Categories } from '@components/index'
import * as Services from '@services/index'
import { render } from '@utils/test-utils'
import React from 'react'

describe('Categories Test', () => {
  it('fetches categories wheen it mounts', () => {
    jest.spyOn(React, 'useEffect').mockImplementationOnce((f) => f())
    jest.spyOn(Services, 'getCategories')
    render(<Categories />)
    expect(Services.getCategories).toHaveBeenCalledTimes(1)
  })
})
