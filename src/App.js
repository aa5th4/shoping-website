import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Checkout from "./Checkout";





function App() {

  const [{},disptach] = useStateValue();

  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is--', authUser);

    if(authUser) {
        //the user just logged in
        disptach ({
          type: 'SET_USER',
          user: authUser
        });
    }else {
        //user is logged out
        disptach({
          type: 'SET_USER',
          user: null
        });
      }
    });

  },[])

  return (
    <div className="app">
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout/payment" element={  <Payment /> }></Route>
       
      </Routes>
    </Router>
  </div>
  );
}

export default App;
