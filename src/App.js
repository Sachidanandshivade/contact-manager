import React,{ useState,useEffect } from "react";
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App(){
  const[contacts,setContacts]=useState([]);

  const addContacts=(contact)=>{
    setContacts([...contacts,contact]);
  };
  const deleteContact=(index)=>{
    const updated =contacts.filter((_, i) => i!== index);
    setContacts(updated);
  };

  return(
    <div className="App">
    <h1>Contact manager</h1>
    <ContactForm addContact={addContacts} />
    <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </div>
  );
}
export default App;