import { useState, useEffect } from 'react'

import './styles.css'
import Contact from '../contact'
import AddContact from '../addContact'
import { initialContacts } from './constants'

const ContactBook = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    // here, an API call would happen and the response would be the inital state
    // to simulate it, we use some hardcoded values
    setContacts(initialContacts)
  }, [])

  return (
    <main className="contact-book-container">
      <AddContact setContacts={setContacts} />

      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} data={contact} setContacts={setContacts} />
        )
      })}
    </main>
  )
}

export default ContactBook
