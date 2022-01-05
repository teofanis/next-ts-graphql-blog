import { PostCard } from '@components/index'
import { Post } from '@interfaces/app.interfaces'
import { render } from '@utils/test-utils'
import { post } from '../__fixtures__/post.json'

const postMock = post as unknown as Post

describe('Post Card Test', () => {
  it('should render properly', () => {
    const { container } = render(<PostCard post={postMock} />)
    expect(container).toMatchSnapshot()
  })
})
