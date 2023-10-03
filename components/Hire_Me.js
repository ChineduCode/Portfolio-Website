import Link from 'next/link'

export default function HireMe(){
    return(
        <Link href={'/contact'} className='hire_me_btn'> 
            <button className="hire_me">Hire Me</button> 
        </Link>
    )
}