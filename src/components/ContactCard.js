import React from 'react';

const ContactCard = ({ contact, onDelete }) => {
  const { id, name, email, phone } = contact;

  return (
    <div className="flex justify-between items-center bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">📧 {email}</p>
        <p className="text-gray-600">📞 {phone}</p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
