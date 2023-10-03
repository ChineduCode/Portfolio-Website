'use client'

import { useState } from "react"
import {FaArrowLeft} from 'react-icons/fa6'
import Link from "next/link"

export default function addNewPortfolio(){
    let [image, setImage] = useState('')
    let [name, setName] = useState('')
    let [tools, setTools] = useState('')
    let [live_link, setLive_Link] = useState('')
    let [github_link, setGithub_Link] = useState('')

    function handleSubmit(e){}

    return(
        <section className="add_new_portfolio">
            <Link href={'/admin/dashboard'} className="go_back"> <FaArrowLeft /> <span>Go Back</span> </Link>
            <h2 className="header">Add New Portfolio</h2>

            <form action="" onSubmit={handleSubmit}>
                <div className="control">
                    <input 
                        type="text" 
                        name="image"
                        value={image}
                        placeholder="Image url"
                        onChange={(e)=> setImage(e.target.value)}
                    />
                </div>
                <div className="control">
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="control">
                    <input 
                        type="text" 
                        name="tools"
                        value={tools}
                        placeholder="Tools"
                        onChange={(e)=> setTools(e.target.value)}
                    />
                </div>
                <div className="control">
                    <input 
                        type="text" 
                        name="live_link"
                        value={live_link}
                        placeholder="Live_Link"
                        onChange={(e)=> setLive_Link(e.target.value)}
                    />
                </div>
                <div className="control">
                    <input 
                        type="text" 
                        name="github_link"
                        value={github_link}
                        placeholder="Github_Link"
                        onChange={(e)=> setGithub_Link(e.target.value)}
                    />
                </div>

                <button type="submit">Add Portfolio</button>
            </form>
        </section>
    )
}