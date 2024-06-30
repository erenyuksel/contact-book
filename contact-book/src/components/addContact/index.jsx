import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { validateContactInputs } from './utils'
import ContactForm from '../contactForm'

import './styles.css'

const AddContact = ({ setContacts }) => {
  const [showForm, setShowForm] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const toggleAddForm = () => {
    setShowForm((prevState) => !prevState)
  }

  const handleSubmit = (e, contact) => {
    e.preventDefault()
    const valid = validateContactInputs(contact)
    if (valid) {
      setContacts((prevState) => [
        ...prevState,
        {
          ...contact,
          id: uuidv4(),
          avatar: URL.createObjectURL(contact.avatar),
        },
      ])
      setErrorMessage('')
      toggleAddForm()
    } else {
      setErrorMessage('All the fields need to be filled.')
    }
  }

  const handleCancel = () => {
    setShowForm(false)
    setErrorMessage('')
  }

  return (
    <>
      {showForm ? (
        <ContactForm
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        />
      ) : (
        <button
          className="add-contact-button"
          type="button"
          onClick={toggleAddForm}
        >
          +
        </button>
      )}
    </>
  )
}

export default AddContact
