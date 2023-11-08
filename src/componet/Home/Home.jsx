import React from 'react';
import axios from 'axios';
import style from './home.module.scss';
import { Link } from 'react-router-dom';
import {FaRobot} from 'react-icons/fa'
import { useState,useEffect } from 'react';
import {AiFillPlusSquare} from 'react-icons/ai';
import {BsWindows} from 'react-icons/bs';
import {IoMdBrowsers} from 'react-icons/io';

export default function Home() {
 

    const [browserGame, setbrowserGame] = useState([]);

  
  

  useEffect(() => {
    gameing();
    
  
    
  }, []);
  
  let gameing= async ()=>{
    let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`,{
      params:{'sort-by':'popularity'},
  
    headers : {
      'X-RapidAPI-Key': 
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host':'free-to-play-games-database.p.rapidapi.com'
    }
    })
    setbrowserGame(data)
    console.log(data)
   
    
  
  }


  return (
   <>
    <div className={`${style.backround} pt-5 text-center  `}>
      <h1 className=''>Find & track the best <span className='text-info'>free-to-play</span> games!</h1>
      <h5 className=''>Track what you've played and search for what to play next! Plus get free premium loot!</h5>
      <div className="btn">
        <Link className='nav-link' to='all' >
        <button type="button" class="btn btn-outline-secondary">Browse Games</button>
        </Link>
      </div>

    </div>

   <div className="row ">
   <h2 className='m-2'> <FaRobot/>Recommendations</h2>
    {browserGame.slice(0,3).map((item,index)=>(
     <div className="col-md-4 mb-4 All">
       <Link className='nav-link' to={`/Details/${item.id}`}>
      <div className="img ">
              <img className='w-100' key={index} src={item.thumbnail} alt="" />
            </div>
            <div className="title pt-3  ">
              <div className="titlein d-flex  justify-content-between  ">
            <div className="text"><h4 key={index} className='text ps-2'>{item.title}</h4></div>
              <div className=" ">
             <button className=' Free btn btn-info text-center me-2 p-0'>Free</button>
              </div>
              </div>
            
            </div>
      </Link>
     </div>
    ))}
   


   </div>
   </>
    

  )
}
