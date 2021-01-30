import React, { useEffect, useState } from 'react'
import Header from './Header'
import './App.css'
import axios from 'axios'
import api from '../services/api'

function App(){
    const [techs, setTechs] = useState([])
    async function handleTechs(){
        const response = await api.post('/studies',{
            tech:'CSS',
            status:'Done'
        })
        setTechs([...techs, response.data])
    }
    useEffect(()=>{
        api.get('/studies').then(res=>{
            setTechs(res.data)
        })
    },[])
    return (
        <>
            <Header title="Rodney">
                <ul>
                    {techs.map( tech => ( 
                    <li key={tech.id}>{tech.tech}</li>
                    ))}
                </ul>
                <button type='button' onClick={handleTechs}>ADD</button>
            </Header>
        </>
    )
}

export default App