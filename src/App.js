import {useEffect, useState} from 'react'
import { Route ,Link, Routes} from "react-router-dom";
import AssignWinner from './containers/admin/assignWinner';
import RegisterUser from './containers/admin/registerUser'
import TicketWinner from './containers/users/ticketWinner';
import UsersList from './containers/users/usersList';
import YupPractice from './containers/yupPractice';

const App =()=> {
  return (
    <>
    <Routes>
      <Route exact path="/" 
      element={<TicketWinner/>} />
      <Route exact path="/registeruser" 
      element={<RegisterUser/>} />
            <Route exact path="/userslist" 
      element={<UsersList/>} />
        <Route exact path="/assignwinner" 
      element={<AssignWinner/>} />
            <Route exact path="/yuppractice" 
      element={<YupPractice/>} />
    </Routes>
    </>
  );
}

export default App;
