import {useEffect, useState} from 'react'
import { Route ,Link, Routes} from "react-router-dom";
import RegisterUser from './containers/admin/registerUser'
import TicketWinner from './containers/users/ticketWinner';
const App =()=> {
  return (
    <>
    <Routes>
      <Route exact path="/" 
      element={<TicketWinner/>} />
      <Route exact path="/registeruser" 
      element={<RegisterUser/>} />
   
    </Routes>
    </>
  );
}

export default App;
