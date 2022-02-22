
import React ,{useEffect,useContext} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import { AuthContext, FirebaseContext } from './store/context';
import Footer from './components/Footer/Footer';
import HeaderNav from './components/Header/HeaderNav';
import Login from './components/Login/Login';
import Home from './components/Home'
import Signup from './components/SignUp/Signup';


function App() {
  // 
  const {setUser }=useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  useEffect(()=>{
    
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path={'/'} element={<Home />}>          
        </Route> 
        </Routes>
        <Routes>
       <Route path={'/signup'} element={<Signup/>}>
      </Route>
       </Routes>
       <Routes>
        <Route path={'/login'} element={<Login/>}>
       </Route>
       </Routes>
       </Router>
      
    </div>
  );
}

export default App;
