import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export default function Home(props) {
    const [name,setName] = useState('text')
    const [major,setMajor] = useState('text')
    const [university,setUniversity] = useState('text')
    const fetchData = async()=>{
        const bio = await axios.get('/.netlify/functions/biodata') 
        setName(bio.data.name)
        setMajor(bio.data.major)
        setUniversity(bio.data.university)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
    <div className="home">
      <div class = "title">
        <h1> Hi:)) I'm {name}</h1>
        <h2> I'm a {major} Student at {university} </h2>
    </div>

    </div>
  );
}
