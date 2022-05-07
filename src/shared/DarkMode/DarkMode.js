import React from 'react';
import { BiSun } from 'react-icons/bi'
import { FaMoon } from 'react-icons/fa'

const DarkMode = ({ dark, setDark }) => {
    const toggleDarkMode = () => {
        setDark(!dark)
        localStorage.setItem("theme", dark)
    }
    return (
        <div className='ps-2'>
            {!dark ? <BiSun size='25' onClick={toggleDarkMode} className='text-white' title='set to dark mode' style={{ cursor: 'pointer' }} />
                : <FaMoon size='20' onClick={toggleDarkMode} className='text-white' title='set to light mode' style={{ cursor: 'pointer' }} />
            }
        </div>
    );
};

export default DarkMode;








// import React, { useEffect, useState } from "react";
// // import "../styles/DarkMode.css";

// const DarkMode = () => {
//     let clickedClass = "clicked";
//     const body = document.body;
//     const lightTheme = "light";
//     const darkTheme = "dark";
//     let theme;

//     if (localStorage) {
//         theme = localStorage.getItem("theme");
//     }

//     if (theme === lightTheme || theme === darkTheme) {
//         body.classList.add(theme);
//     } else {
//         body.classList.add(lightTheme);
//     }

//     const switchTheme = (e) => {
//         if (theme === darkTheme) {
//             body.classList.replace(darkTheme, lightTheme);
//             e.target.classList.remove(clickedClass);
//             localStorage.setItem("theme", "light");
//             theme = lightTheme;
//         } else {
//             body.classList.replace(lightTheme, darkTheme);
//             e.target.classList.add(clickedClass);
//             localStorage.setItem("theme", "dark");
//             theme = darkTheme;
//         }
//     };

// return (
//     <button onClick={(e) => switchTheme(e)}>Dark</button>
// );
// };

// export default DarkMode;