import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No contacts found.
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
