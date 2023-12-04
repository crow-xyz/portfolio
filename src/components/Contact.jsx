import React, { useState } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  // State to store the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // State to store the form status
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: false,
  })

  // Function to handle the form submission
  const handleSubmit = (e) => {
    // Prevent the default behavior of the form
    e.preventDefault()
    // Set the submitting state to true
    setFormStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    // Send the form data using emailjs
    emailjs
      .sendForm(
        // your service ID
        'service_v9kv94i',
        // your template ID
        'template_vvu94rl',
        // a reference to the form element
        e.target,
        // your user ID (protip: create a .env file to store it)
        import.meta.env.VITE_APP_EMAILJS_USERID
      )
      .then(
        // handle the success response
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          // reset the form data
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
          // set the submitted state to true, and submitting and error states to false
          setFormStatus({
            submitted: true,
            submitting: false,
            error: false,
          })
        },
        // handle the error response
        (error) => {
          console.log('FAILED...', error)
          // set the error state to true, and submitting state to false
          setFormStatus((prevStatus) => ({
            ...prevStatus,
            submitting: false,
            error: true,
          }))
        }
      )
  }

  // Function to handle the form input changes
  const handleChange = (e) => {
    // get the input name and value
    const { name, value } = e.target
    // update the formData state
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className='container mx-auto px-4 py-16'>
      <h2 className='text-4xl font-bold text-center text-gray-800'>
        Contact Me
      </h2>
      <p className='text-lg text-center text-gray-600 mt-4'>
        If you have any questions, feedback, or suggestions, please feel free to
        send me a message using the form below. I will get back to you as soon
        as possible.
      </p>
      <form className='max-w-2xl mx-auto mt-8' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='form-group'>
            <label htmlFor='name' className='text-gray-800'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded px-3 py-2 mt-1'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='text-gray-800'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full border border-gray-300 rounded px-3 py-2 mt-1'
              required
            />
          </div>
        </div>
        <div className='form-group mt-4'>
          <label htmlFor='subject' className='text-gray-800'>
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded px-3 py-2 mt-1'
            required
          />
        </div>
        <div className='form-group mt-4'>
          <label htmlFor='message' className='text-gray-800'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded px-3 py-2 mt-1'
            rows={5}
            required
          />
        </div>
        <div className='form-group mt-4'>
          <button
            type='submit'
            className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
      {formStatus.error && (
        <p className='text-red-600 text-center mt-4'>
          Oops, something went wrong. Please try again later.
        </p>
      )}
      {formStatus.submitted && (
        <p className='text-green-600 text-center mt-4'>
          Thank you for your message. I will reply to you soon.
        </p>
      )}
    </div>
  )
}

export default Contact
