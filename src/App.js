import React,{ useState,useEffect } from "react";
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import { v4 as uuidv4 } from "uuid";

function App(){
  const[contacts,setContacts]=useState([]);

  const addContacts = (contact) => {
  setContacts([...contacts, { id: uuidv4(), ...contact }]);
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