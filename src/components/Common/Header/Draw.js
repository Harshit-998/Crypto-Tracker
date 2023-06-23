import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import { Switch } from "@mui/material";
import { toast } from "react-toastify"

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div  className="drawer-wrapper">

      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
     
      <Drawer
        // if i say anchor value = top then drawer open  from top
        // anchor is place where my drawer open
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
      >

        <div className='drawer-div'>
          <Link to="/">
          <p className='link'>Home</p>
          </Link>
          <Link to="/compare">
          <p className='link'>Compare</p>
          </Link>
          <Link to="/watchlist">
          <p className='link'>Watchlist</p>
          </Link>
          <Link to="/dashboard">
          <p className='link'>Dashboard</p>
          </Link>
          <Switch
            checked={darkMode}
            onClick={() => {
              changeMode();
            }}
          />
        </div>


      </Drawer>


    </div>
  );
}

