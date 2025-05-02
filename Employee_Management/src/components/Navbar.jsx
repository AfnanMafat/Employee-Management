import React from 'react';
import styles from "./Navbar.module.css"
import logo from  "../assets/Logo.png"

const Navbar = () => {
  return (
    <>
        <div className={styles.navbar}>
            <ul>
                <li><img src={logo} height={"100px"}/></li>
                <li><a href='/HomePage'>Home</a></li>
                <li><a href='/Department'>Department</a></li>
                <li><a href='/Employee'>Employee</a></li>
                <li><a href='/'>Logout</a></li>
            </ul>
        </div>
    </>
  );
};

export default Navbar;
