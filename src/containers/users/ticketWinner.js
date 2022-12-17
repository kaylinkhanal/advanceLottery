import {useState, useEffect} from 'react'
const TicketWinner =()=> {
    const [ticketList, setTicketList] = useState([])
    const [stillInTheGame, setStillInTheGame] = useState(true)
    const [typedTicketNo,setTypedTicketNo] = useState('')
    const [currentName,setCurrentName] = useState('')

//    const colorList = ['aqua', 'red','green']
    const [bgColor, setBgColor] = useState(colorList[0])
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

    const drawRandom = () => {
        const randomID = Math.floor(Math.random()*ticketList.length)
        const tempTicket = [...ticketList]
        tempTicket.splice(randomID,1)
        const typedNumInt =Number(typedTicketNo)
        if(tempTicket.includes(typedNumInt)){
            setStillInTheGame(true)
        }else{
            setStillInTheGame(false)
        }
        setTicketList(tempTicket)
    }



    if(!stillInTheGame){
        return (<h1>hi you lost</h1>) 
    }
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
     <button onClick={()=> drawRandom()}>Next draw</button>
     </>
    );
  }
  
  export default TicketWinner;
  