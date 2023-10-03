'use client'

import Link from 'next/link' 
import { useState } from "react"
import { FaBold, FaItalic, FaUnderline, FaFont, FaArrowLeft } from 'react-icons/fa6'

export default function createNewBlog(){
    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    let [file, setFile] = useState(null)
    let [active, setActive] = useState(false) 
    
    const handleFileChange = (event) => {
        setFile(file = event.target.files)
        console.log(file)
    };

    const bold = {
        fontWeight: 900,
        textTransform: 'uppercase'
    }

    function toggleBold(){
        setActive(active = !active)
        console.log(active)
    }

    async function handleSubmit(e){
        e.preventDefault()

        const fd = new FormData();
        fd.append('file', file)
        console.log(file)
        console.log(fd)

        const newBlog = {
            title,
            content,
            file,
        }

        await fetch('/api/blogs', {
            method: 'POST',
            body: JSON.stringify(newBlog) 
        })
    }

    return (
        <section className="create_blog_post">
            <div className="header">
                <Link href={'/admin/dashboard'} className="go_back"> <FaArrowLeft /> <span>Go Back</span> </Link>

                <h1>Create blog post</h1>
                <div className="styling_options">
                    <span className='bold' onClick={toggleBold}><FaBold /></span>
                    <span className="italic"><FaItalic/></span>
                    <span className="underline"><FaUnderline /></span>
                    <span className="font"><FaFont /></span>
                </div>
            </div>
            
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text" 
                    name="title"
                    className='title'
                    placeholder='Title'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    required
                />

                <textarea
                    name="text"
                    cols="30"
                    rows="10"
                    className={`content ${active ? 'active' : 'content'}`}
                    placeholder='Content'
                    value={content}
                    onChange={(e)=> setContent(e.target.value)} 
                    required
                ></textarea>

                <input
                    type="file"
                    name="file"
                    className='file'
                    multiple 
                    onChange={handleFileChange}
                    required
                />
                
                <button type="submit">Create Post</button>
            </form>
        </section>
    )
}