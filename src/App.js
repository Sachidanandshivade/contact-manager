import React,{ useState,useEffect } from "react";
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App(){
  const[contacts,setContacts]=useState([]);

  const addContacts=(contact)=>{
    setContacts([...contacts,contact]);
  };

  const deleteContact=(id)=>{
    const updated =contacts.filter((c)=>c.id !== id);
    setContacts(updated);
  };

  return(
    <div className="App">
    <h1>Contact manager</h1>
    <ContactForm addContact={addContacts} />
    <ContactList contacts={contacts} onDelete={deleteContact}/>
    </div>
  );
}
export default App;