'use client'

import { useState, useEffect, useRef } from 'react'
import Loading from '@/components/Loading'
import Portfolio from '@/components/Portfolio'

export default function PorfolioPage(){
    let [portfolios, setPortfolios] = useState([])
    const [loading, setLoading] = useState()
    let [stack, setStack] = useState('')
    const filterContainer = useRef(null)

    useEffect(()=> {
        const fetchPortfolios = async ()=> {
            setLoading(true)
            const res = await fetch('/api/portfolio', {next : {revalidate : 10}})
            const data = await res.json()
            setPortfolios(data)
            setLoading(false)
        }

        fetchPortfolios()
    }, [])
    
    //Toggle active class for each element clicked and removing it from the elements that hasn't been clicked
    function toggleFilterClass(e){
        const current = e.target

        const children = filterContainer.current.children
        //looping all through elements in the filterContainer
        for (let i = 0; i < children.length; i++) {
            const element = children[i];

            //Removing active class from any element that has it
            if(element.className.includes('active')){
                element.className = current.innerText.toLowerCase()
            }
        }
        
        //Adding active class to the target element
        current.className = current.className + ' active'
    }

    async function filterProjects(e){
        toggleFilterClass(e)

        setLoading(true)
        setStack(stack = e.target.innerText.toLowerCase())
        const res = await fetch(`/api/portfolio/filter?stack=${stack}`)
        const filteredPortfolios = await res.json()
        setPortfolios(filteredPortfolios) 
        setLoading(false)
    } 

    return ( 
        <section className='portfolio'>
            <section className='header'>
                <h2 className="heading">My Portfolio</h2>
                <span className="sub_heading">Projects List</span>
            </section>

            <section className="hero">
                <div className="categories" ref={filterContainer} onClick={toggleFilterClass}>
                    <span className={`all active`} onClick={filterProjects}>All</span>
                    <span className="frontend" onClick={filterProjects}>Frontend</span> 
                    <span className="backend" onClick={filterProjects}>Backend</span>
                    <span className="fullstack" onClick={filterProjects}>Fullstack</span>
                </div>

                {loading ? <Loading /> : <Portfolio portfolios={portfolios}/>}

            </section>
        </section>
    );
}