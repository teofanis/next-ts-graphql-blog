import { Header } from '@components/index'
import * as Services from '@services/index'
import { act, render, screen } from '@utils/test-utils'
import React from 'react'
import { categories } from '../__fixtures__/categories.json'

const getCategoriesMock = jest.fn(() => Promise.resolve(categories))
const ServiceSpy = jest.spyOn(Services, 'getCategories')
ServiceSpy.mockImplementation(getCategoriesMock)

describe('Header Test', () => {
  it('should render correctly', async () => {
    await act(() => render(<Header />))
    expect(screen.getByTestId('header-wrapper-container')).toMatchSnapshot()
  })
})
