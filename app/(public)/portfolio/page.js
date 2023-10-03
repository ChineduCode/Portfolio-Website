'use client'

import { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import Portfolio from '@/components/Portfolio'

export default function Porfolio(){
    let [portfolios, setPortfolios] = useState([])
    const [loading, setLoading] = useState()
    let [stack, setStack] = useState('')
    let [active, setActive] = useState(false)

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
    
    async function filterProjects(e){
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
                <div className="categories">
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