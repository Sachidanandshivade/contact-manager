import React,{useState} from "react";
function ContactForm({addContact}){
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.trim()===''|| email.trim()===''){
            alert('both name and email are required');
            return;
        }
        addContact({name,email});
        setName('');
        setEmail('');
    };
    return(
        <form onSubmit={handleSubmit}>
        <h2>Add Contact</h2>
        <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
        placeholder="Enter name" />
        </div>

         <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

<button type="submit">Add</button>
        </form>
    );

}
export default ContactForm;
