import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
// Add in any providers here if necessary:

const Providers: React.FC = ({ children }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'
// override render method
export { customRender as render }
