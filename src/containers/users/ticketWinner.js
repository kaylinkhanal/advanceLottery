import {useState, useEffect} from 'react'
const TicketWinner =()=> {
    const [ticketList, setTicketList] = useState([])
    const [typedTicketNo,setTypedTicketNo] = useState('')
    const [currentName,setCurrentName] = useState('')

   
    const [bgColor, setBgColor] = useState('aqua')
    const fetchTicketData = async()=> {
       const data = await fetch('http://localhost:3000/ticket/')
       const tickets = await data.json() 
       const allTicketList = tickets.ticketList
        //make an empty array tempArr
        //loop allticketList and push the item.ticketNo to tempArr
        //if tempArr already has item.ticketNo do not add
        //  setTicketList(tempArr)
       const tempList = []
       allTicketList.map((item)=>{
         if(!tempList.includes(item.ticketNo)){
            tempList.push(item.ticketNo)
         }
       })
       
       setTicketList(tempList)
    }
    useEffect(()=>{
        fetchTicketData()
    },[])
    return (
    <>
    hi {currentName}
     {ticketList.length >0 && ticketList.map((item,id)=>{
        return <div 
        style={{
        backgroundColor:typedTicketNo.toString()=== item.toString() ? bgColor : null,
         margin:'20px',height:'40px', width:'50px' }}
        >{item}</div>
     })}
     <input 
    onKeyUp={(e)=> setTypedTicketNo(e.target.value)}
     placeholder="Enter your ticket number"/>
      <input 
    onKeyUp={(e)=> setCurrentName(e.target.value)}
     placeholder="Enter your name"/>
     <button>Next draw</button>
     </>
    );
  }
  
  export default TicketWinner;
  