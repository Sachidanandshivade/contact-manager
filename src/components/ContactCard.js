import React from 'react';

const ContactCard=({contact,onDelete})=>{
  const {id,name,email,phone}=contact;
  return(
   <div className="contact-card">
   <div>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
   </div>
  );

};
export default ContactCard;