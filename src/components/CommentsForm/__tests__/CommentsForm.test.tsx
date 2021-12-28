import { CommentsForm } from '@components/index'
import * as Services from '@services/index'
import { fireEvent, render, waitFor } from '@utils/test-utils'

const submitCommentMock = jest.fn(() =>
  Promise.resolve({
    createComment: () => false,
  })
)
const ServiceSpy = jest.spyOn(Services, 'submitComment')
ServiceSpy.mockImplementation(submitCommentMock)

describe('Comment Form Test', () => {
  it('should render properly', () => {
    const { container } = render(<CommentsForm slug={`some-slug`} />)
    expect(container).toMatchSnapshot()
  })

  it('requires all fields', () => {
    const { getByText } = render(<CommentsForm slug={`some-slug`} />)
    const button = getByText(/Post Comment/i)
    fireEvent.click(button)
    expect(getByText(/All Fields are required/i)).toBeInTheDocument()
  })

  it('it submits correctly', async () => {
    const { getByTestId, getByText } = render(
      <CommentsForm slug={`some-slug`} />
    )
    const button = getByTestId('submit-button')
    const textArea = getByTestId('comment-input')
    const Name = getByTestId('name-input')
    const Email = getByTestId('email-input')

    await waitFor(() => {
      fireEvent.change(textArea, { target: { value: 'some comment' } })
      fireEvent.change(Name, { target: { value: 'some name' } })
      fireEvent.change(Email, { target: { value: 'some email' } })
      fireEvent.click(button)
      expect(textArea).toHaveValue('some comment')
      expect(Services.submitComment).toHaveBeenCalled()
      expect(getByText(/Comment Submitted For Review!/i)).toBeInTheDocument()
    })
  })
})
