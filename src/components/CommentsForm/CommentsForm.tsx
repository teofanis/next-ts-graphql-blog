import { Comment } from '@interfaces/app.interfaces'
import { submitComment } from '@services/index'
import React, { useEffect, useState } from 'react'

interface CommentsFormProps {
  slug: string
}
interface FormData {
  name: string | null
  email: string | null
  comment: string | null
  storeData: boolean
}

const CommentsForm = ({ slug }: CommentsFormProps) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState<Storage>()
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  })
  useEffect(() => {
    setLocalStorage(window.localStorage)
    const initialFormData: FormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      comment: null,
      storeData: Boolean(
        window.localStorage.getItem('name') ||
          window.localStorage.getItem('email')
      ),
    }
    setFormData(initialFormData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e
    if (target.type === 'checkbox' && target instanceof HTMLInputElement) {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }))
    }
  }

  const handleCommentSubmission = () => {
    setError(false)
    const { name, email, comment, storeData } = formData

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObject: Comment = {
      name,
      email,
      comment,
      slug,
    }

    if (storeData && localStorage) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    } else if (localStorage) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    submitComment(commentObject).then((response) => {
      if (response.createComment) {
        if (!storeData) {
          formData.name = null
          formData.email = null
        }
        formData.comment = null
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }))
      }
      setShowSuccessMessage(true)
      setTimeout(() => setShowSuccessMessage(false), 3000)
    })
  }

  return (
    <div className="bg-white dark:bg-gray-500 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Comment
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          onChange={onInputChange}
          value={formData.comment || ''}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Leave a comment"
          name="comment"
          data-testid="comment-input"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          onChange={onInputChange}
          value={formData.name || ''}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
          data-testid="name-input"
        />
        <input
          type="email"
          onChange={onInputChange}
          value={formData.email || ''}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
          data-testid="email-input"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            name="storeData"
            id="storeData"
            value="true"
            data-testid="checkbox-input"
          />
          <label
            className="dark:text-white text-gray-500 cursor-pointer text-sm ml-2"
            htmlFor="storeData"
          >
            Save my e-email and name for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm">All Fields are required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          data-testid="submit-button"
          className="transition duration-500 ease dark:hover:bg-yellow-600 dark:bg-yellow-500 hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor:pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-green-500">
            Comment Submitted For Review!
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
