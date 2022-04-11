import React, { useState } from 'react';
import axios from "axios";
import Cards from './Cards';

const Home = () =>


 {

const [search,setSearch] = useState("");
const [data,setData] = useState([])
const searchBook = (evnt)=>{

    if(evnt.key ==="Enter"){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBDbZRiAESCi8gfGAVPEyyAL94xbBsMw_A`)
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    }
}
  return (
    <>
    
    <div>
        <div>
            <h1>A room without books is like a body without Soul</h1>
        </div>

        <div>
            <h2>Search for Books</h2>

   <div>
       <input type="text" placeholder='Enter Your Book Name' value={search} 
        onChange={(e)=>{setSearch(e.target.value)}}
        onKeyPress= {searchBook}/>
       <button>Search</button>
   </div>
        </div>
    </div>

   
   <div>
        <Cards books={data}/>
   </div>
       
    
    </>
  )
}

export default Home
