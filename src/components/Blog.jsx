import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export default function Blog(props) {
    const [blog,setBlog] = useState([])
    const fetchData = async()=>{
        const data = await axios.get('/.netlify/functions/scrapping') 
        console.log(data.data)
        setBlog(data.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="blog">
            <div class = "title">
                
                <h1> My Blog</h1>
            </div>

            {blog.map((content)=>{
                return <ul><li><a href= {content.link} > {content.link}</a></li></ul>
            })}
         

        </div>
    );
}