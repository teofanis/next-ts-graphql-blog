import { PostDetail } from '@components/index'
import { Post } from '@interfaces/app.interfaces'
import { render } from '@utils/test-utils'
import { post } from '../__fixtures__/post.json'

const postMock = post as unknown as Post
describe('Post Detail test', () => {
  it('should render correctly', () => {
    const { container } = render(<PostDetail post={postMock} />)
    expect(container).toMatchSnapshot()
  })
})
