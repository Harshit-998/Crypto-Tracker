import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import MobileDrawer from "./Draw";
import Button from "../Button"
import { Switch } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
const [darkMode, setDarkMode] = useState( 
  localStorage.getItem("theme") == "dark" ? true : false)
 
useEffect(()=>{
  if(localStorage.getItem("theme") == "dark"){
 setDark();
}else{
  setLight();
}
 
}, []);

const changeMode = () => {
  setDarkMode(!darkMode);
  toast.success("Theme Changed !", {position: toast.POSITION.TOP_RIGHT
  } )
  const mode = localStorage.getItem("theme");
  if (mode == "dark") {
    setLight();
  } else {
    setDark();
  }
 }

 const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };


  return (
    <div className='navbar'>
    
<h1 className='logo'>CryptoTracker <span style={{color: "var(--blue)"}}>.</span></h1>
      
      <div className='links-flex'>
      <Switch checked={darkMode} onClick={()=>changeMode()}/>
   
        <Link to="/"><p className='link'>Home</p></Link>
        <Link to="/compare"><p className='link'>Compare</p></Link>
        <Link to="/watchlist"><p className='link'>Watchlist</p></Link>
        <Link to="/dashboard">
         <Button  text ={"Dashboard"}
          onClick={() => console.log("hello")}
        />
          </Link>
      
      </div>

    
        <MobileDrawer />
      
    </div>
  )
}

export default Header;
