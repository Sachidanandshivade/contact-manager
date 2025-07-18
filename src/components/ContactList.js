import React from "react";
import ContactCard from "./ContactCard";

const ContactList=({ contacts, onDelete })=> {
return(
    <div>
    {contacts.map((contact)=>(
        <ContactCard key={contact.id} contact={contact} onDelete={onDelete}/>
    ))}
    </div>
);

};
export default ContactList;