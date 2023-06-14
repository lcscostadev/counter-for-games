// eslint-disable-next-line no-unused-vars
import React from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
    return (
        <div className='flex items-start justify-center '>
            <ul className='flex items-center justify-evenly p-4 bg-[#242a56f4] max-w-7xl rounded-lg mt-10'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id}>
                        <a href={`#${nav.id}`} className={`text-white text-2xl hover:text-[#ccc] border-[#3d4897f4] ${index !== navLinks.length - 1 ? 'border-r-4 px-5' : 'border-0 pl-5'}`}>{nav.name}</a>
                    </li>
                ))}
            </ul>
        </div >
    );
};

export default Navbar;
