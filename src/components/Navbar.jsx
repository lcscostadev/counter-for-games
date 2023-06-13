// eslint-disable-next-line no-unused-vars
import React from 'react';
import { navLinks } from '../constants';

const Navbar = () => {
    return (
        <div className='flex items-start justify-center h-[100vh] '>
            <ul className='flex items-center justify-evenly gap-10 p-4 bg-[#242a56f4] max-w-7xl rounded-lg mt-10'>
                {navLinks.map((nav) => (
                    <li key={nav.id}>
                        <a href={`#${nav.id}`} className='text-white text-2xl hover:text-[#ccc]'>{nav.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
