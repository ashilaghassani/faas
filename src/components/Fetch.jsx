import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export default function Blog(props) {
    const [fetch,setFetch] = useState([])
    const fetchData = async()=>{
        const data = await axios.get('/.netlify/functions/fetch') 
        console.log(data.data)
        setFetch(data.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="blog">
            <div class = "title">
                
                <h1> Fact Cat</h1>
            </div>
            {fetch.map((content)=>{
                return <ul><li><p>{content.text} </p></li></ul>
            })}
         

        </div>
    );
}
