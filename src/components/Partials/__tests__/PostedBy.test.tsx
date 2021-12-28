import { PostedBy } from '@components/Partials'
import { render } from '@utils/test-utils'
import { author } from '../__fixtures__/author.json'

describe('Posted By Test', () => {
  it('should render correctly', () => {
    const { container } = render(<PostedBy author={author} />)
    expect(container).toMatchSnapshot()
  })
})
