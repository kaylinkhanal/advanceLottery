import React, {useEffect, useState} from 'react';
import RegisterUser from '../admin/registerUser';

const UsersList = () => {
    const [ticketList, setTicketList] = useState([])
    const [editId, setEditId] = useState(null)

    const fetchTicketData = async()=> {
        const data = await fetch('http://localhost:3000/ticket/')
        const tickets = await data.json() 
        setTicketList(tickets.ticketList)
     }
     useEffect(()=>{
         fetchTicketData()
     },[])
 return( 
 <div>
  {ticketList.length>0 && (
      <>
     { ticketList.map((item, id)=> {
     return(
        <div style={{margin: '10px', backgroundColor:'yellow'}}>
            <li>{item.name}</li>
           <button onClick={()=>setEditId(id)}>Edit</button>
           {id===editId && <RegisterUser editform={true} userDetail={item}/>}
        </div>
     )})}
      </>
  )}
   
  </div>)

}

export default UsersList