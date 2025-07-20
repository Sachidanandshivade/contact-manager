import React, { useState } from "react";
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchterm, setSearchterm] = useState('');

  const addContacts = (contact) => {
    const contactWithId = { ...contact, id: uuidv4() };
    setContacts([...contacts, contactWithId]);
  };

  const deleteContact = (id) => {
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
  };

  const filter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchterm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchterm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Manager</h1>

        <ContactForm addContact={addContacts} />

        <input
          type="text"
          placeholder="Search by name or email"
          className="w-full mt-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />

        <ContactList contacts={filter} onDelete={deleteContact} />
      </div>
    </div>
  );
}

export default App;
