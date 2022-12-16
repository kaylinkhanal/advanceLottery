import {useState} from 'react'
const RegisterUser =()=> {
const [name,setName] = useState('')
const [ticketNo,setTicket] = useState('')
const registerUser = () => {
    const requestOptions = {
        method: "POST",
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify({name, ticketNo})
    }
   fetch('http://localhost:3000/register' , requestOptions)
}
    return (
    <>
      <input onKeyUp={(e)=> setName(e.target.value)} placeholder="enter full name"/>
      <input onKeyUp={(e)=> setTicket(e.target.value)} placeholder="enter selected ticket"/>
      <button onClick={()=>registerUser()}>Register</button>
     </>
    );
  }
  
  export default RegisterUser;
  