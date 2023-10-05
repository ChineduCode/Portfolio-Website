import Link from 'next/link'

export default function HireMe(){
    return(
        <Link href={'mailto:chineducode@gmail.com?subject=Job%20Offer'} className='hire_me_btn'> 
            <button className="hire_me">Hire Me</button>  
        </Link>
    )
}