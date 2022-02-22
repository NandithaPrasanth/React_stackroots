import React, { useContext } from 'react';
import { AuthContext, FirebaseContext } from '../store/context';
import {  useNavigate } from 'react-router-dom';
import HeaderNav from './Header/HeaderNav';
import Footer from './Footer/Footer';
import Banner from '../components/Banner/Banner'



function Home() {
    const navigate= useNavigate()
    const {user}=useContext(AuthContext)
    const {firebase}=useContext(FirebaseContext)
  return (
    <div>
    
        <HeaderNav/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home