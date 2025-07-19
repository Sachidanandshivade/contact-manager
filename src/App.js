import React,{ useState,useEffect } from "react";
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import { v4 as uuidv4 } from "uuid";

function App(){
  const[contacts,setContacts]=useState([]);
  const[searchterm,setSearchterm]=useState('');
  const addContacts=(contact)=>{
    setContacts([...contacts,contact]);
  };

  const deleteContact=(id)=>{
    const updated =contacts.filter((c)=>c.id !== id);
    setContacts(updated);
  };

  const filter=contacts.filter(contact=>
    contact.name.toLowerCase().includes(searchterm.toLowerCase())||
    contact.email.toLowerCase().includes(searchterm.toLowerCase())
  );

  return(
    <div className="App">
    <h1>Contact manager</h1>
    <ContactForm addContact={addContacts} />
    <input type="text" placeholder="search by name or email" value={searchterm}
    onChange={(e)=>setSearchterm(e.target.value)} />
    <ContactList contacts={filter} onDelete={deleteContact}/>
    </div>
  );
}
export default App;