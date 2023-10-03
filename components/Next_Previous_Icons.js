import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'

const NextPreviousIcons = () => {
    return ( 
        <section className="next_previous_icons">
            <span className='previous_icon'> <FaAnglesLeft /> </span>
            <span className='next_icon'> <FaAnglesRight/> </span>
        </section>
    );
}

export default NextPreviousIcons;