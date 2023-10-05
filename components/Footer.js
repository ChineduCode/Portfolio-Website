'use client'

import Link from 'next/link';
import {FaPhone, FaMessage, FaCheck} from 'react-icons/fa6'
import SocialMediaPlatforms from './SocialMedia';
import { useState } from 'react';

const Footer = () => {
    let [email, setEmail] = useState('')
    let [subscribe, setSubscribe] = useState(false)

    async function onSubscribe(e){
        e.preventDefault()

        if(!email) return
        
        try {
            const res = await fetch('/api/subscribers', {
                method: 'POST',
                headers: {
                    'Content-type' : 'Application.json'
                },
                body: JSON.stringify({ email })
            })

            if(res.ok){
                setSubscribe(true) //setting the subscribe to true to render check icon
                setEmail(email = '')
                await new Promise(resolve => setTimeout(resolve, 5000)) //await for 5 seconds to return the subscribe button
                setSubscribe(false)
            }else{
                throw new Error('Failed to subscribe')
            }

        } catch (error) {
            console.error(error)
        }

    }

    return (
        <footer>
            <div className="footer top">
                <div className="header">
                    <div className="heading">|| <span className="text">Get Latest Updates</span></div>
                    <h2 className="sub_header">Subscribe For Newsletter</h2>
                </div>

                <form action="/" method="post" onSubmit={onSubscribe}>
                    <input type="email" name="email" id="email" placeholder='john@example.com' value={email} onChange={(e)=> setEmail(e.target.value)} />
                    { subscribe ? <FaCheck size={40} className='subscribed_check'/> : <button type='submit'>Subscribe Now</button> }
                </form>

                <div className="contact_info_socialmedia_platform">
                    <div className="contact_info">
                        <div className="phone">
                            <Link href={'tel:+2349069061684'}> <FaPhone size={40} /> <span>2349069061684</span> </Link>
                        </div>
                        <div className="email">
                            <Link href={'mailto:chineducode@gmail.com?subject=Job%20Offer'}> <FaMessage size={40} /> <span>chineducode@gmail.com</span> </Link>
                        </div>
                    </div>

                    <SocialMediaPlatforms />
                </div>
            </div> 

            <div className="footer bottom">
                <div className="copyright"> &copy; 2023 <span className='name'>ChineduCode.</span> All rights reserved</div>
            </div>
        </footer>
    );
} 
 
export default Footer;