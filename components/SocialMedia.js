import Link from 'next/link';
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa6'

const SocialMediaPlatforms = () => {
    return ( 
        <ul className='social_media_links'>
            <li className='facebook_link'>
                <Link href={'https://www.facebook.com/chinedunnaemeka001'} target='_blank'> <FaFacebook size={40} /> </Link> 
            </li>
            <li className='twitter_link'>
                <Link href={'https://www.twitter.com/chineducode'} target='_blank'> <FaTwitter size={40} /> </Link>
            </li>
            <li className='linkedIn_link'>
                <Link href={'https://www.linkedin.com/in/chineducode'} target='_blank'> <FaLinkedin size={40} /> </Link> 
            </li>
        </ul>
    );
}
 
export default SocialMediaPlatforms;