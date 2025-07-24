import React, { useState } from "react";
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes,Route,Link } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchterm, setSearchterm] = useState('');
  const [message, setMessage]=useState('');
  const addContacts = (contact) => {
    const contactWithId = { ...contact, id: uuidv4() };
    setContacts([...contacts, contactWithId]);
    setMessage("Added Successfully!");
    setTimeout(()=>{
      setMessage('')},2000);
    
  };

  const deleteContact = (id) => {
    if(window.confirm("Are you sure")){
    const updated = contacts.filter((c) => c.id !== id);
    setContacts(updated);
    }
  };

  const filter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchterm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchterm.toLowerCase())
  );

  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Manager</h1>

        <div className="flex justify-center gap-4 mb-4">
            <Link to="/" className="text-blue-600 hover:underline">Contact List</Link>
            <Link to="/add" className="text-blue-600 hover:underline">Add Contact</Link>
          </div>

          <Routes>
          <Route path="/add" element={
            <>
            {message && (
      <div className="mb-4 p-3 text-green-700 bg-green-100 rounded">
        {message}
      </div>
    )}
        <ContactForm addContact={addContacts} /> </> }/>
            <Route path="/" element={
              <>
        <input
          type="text"
          placeholder="Search by name or email"
          className="w-full mt-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
        />

        <ContactList contacts={filter} onDelete={deleteContact} />
        </>
            } />
             </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
