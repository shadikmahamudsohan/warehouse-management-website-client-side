import React, { useState } from 'react';
import { BiSun } from 'react-icons/bi'
import { FaMoon } from 'react-icons/fa'

const DarkMode = () => {
    const [dark, setDark] = useState(false)
    const toggleDarkMode = () => {
        setDark(!dark)

    }

    if (dark) {
        document?.getElementById('main')?.classList?.add('bg-dark')
        document?.getElementById('main')?.classList?.add('text-light')
        document?.getElementById('table')?.classList?.add('text-light')
        document?.getElementById('card')?.classList?.add('bg-dark')

    } else {
        document?.getElementById('main')?.classList?.remove('bg-dark')
        document?.getElementById('main')?.classList?.remove('text-light')
        document?.getElementById('table')?.classList?.remove('text-light')
        document?.getElementById('card')?.classList?.remove('bg-dark')
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