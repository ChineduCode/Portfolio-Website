import Link from 'next/link';
import { FaXmark } from 'react-icons/fa6'
import SocialMediaPlatforms from './SocialMedia';
import { useState } from 'react';


const Nav = ({setToggleNav, toggleNav}) => {
    
    let [initialX, setInitialX] = useState(null)

    function handleTouchStart(e){
        setInitialX(initialX = e.touches[0].clientX)
    }

    function handleTouchMove(e){
        if (initialX === null) return; // Ignore if touchstart wasn't registered

        const currentX = e.touches[0].clientX;
        const deltaX = currentX - initialX;

        if (deltaX > 0) {
            // Swiped right
            console.log('Swiped right');
        } else if (deltaX < 0) {
            // Swiped left
            console.log('Swiped left');
        }
    
        initialX = null; // Reset initialX for the next touchstart
    }

    return ( 
        <nav 
            className={`nav ${toggleNav ? 'active_nav' : 'nav'}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className='close-menu' onClick={()=> setToggleNav(false)}> <FaXmark size={35} /> </div> 

            <ul className='nav_links'>
                <li className='nav_link' onClick={()=> setToggleNav(false)}> <Link href={'/'}> Home </Link> </li>
                <li className='nav_link' onClick={()=> setToggleNav(false)}> <Link href={'/about'}> About Me </Link> </li>
                <li className='nav_link' onClick={()=> setToggleNav(false)}> <Link href={'/portfolio'}> Portfolio </Link> </li>
                <li className='nav_link' onClick={()=> setToggleNav(false)}> <Link href={'/blog'}> Blog </Link> </li>
                <li className='nav_link' onClick={()=> setToggleNav(false)}> <Link href={'/contact'}> Contact </Link> </li>
            </ul>
            
            <SocialMediaPlatforms />
        </nav>
    );
}
 
export default Nav;