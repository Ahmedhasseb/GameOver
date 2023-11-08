import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {BsWindows} from 'react-icons/bs';
import {IoMdBrowsers} from 'react-icons/io';


export default function Details() {
    let {id}=useParams();
    
    const [detailsGame,setdetailsGame] = useState([]);
    const [detailsSystem, setdetailsSystem] = useState([]);
    const [scren, setscren] = useState([]);
    useEffect(() => {
      getGameDetails()
    
     
    }, [])
    

    let getGameDetails=async ()=>{
        let {data}= await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?`,{
        params:{id:id},
     
  
    headers : {
      'X-RapidAPI-Key': 
    'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
     'X-RapidAPI-Host':'free-to-play-games-database.p.rapidapi.com'
    }
    })
  setdetailsGame(data);
    let screnshot=data.screenshots
    let system=data.minimum_system_requirements
    setscren(screnshot)
    
    setdetailsSystem(system)
    }
  return (
    <>
    {detailsGame.platform==='Windows'?<div className="row">
        <div className="col-md-4">
            <div className="img-details">
                <img className='w-100 rounded-3' src={detailsGame.thumbnail} alt="" />
            </div>
            <div className="img-link">
            <button type="button" class="btn btn-secondary mt-2 rounded-2">Free</button>
            <a className='btn btn-info text-white w-75 mt-2 ms-3 rounded-2' target='_blank' href={detailsGame.game_url}>PLAY NOW</a>
            </div>
        </div>
        <div className="col-md-8">
            <h1>{detailsGame.title}</h1>
            <h5>About{detailsGame.title}</h5>
            <p className='description'>{detailsGame.description}</p>
             <h4>Minimum System Requirements</h4>
<ul className='p-0'>  
    <li><strong>graphics:</strong>{detailsSystem.graphics}</li>
    <li><strong>memory:</strong>{detailsSystem.memory}</li>
    <li><strong>os:</strong>{detailsSystem.os}</li>
    <li><strong>processor:</strong>{detailsSystem.processor}</li>
    <li><strong>storage:</strong>{detailsSystem.storage}</li>
</ul> 
        
            <h4>{detailsGame.title} Screenshots</h4>
           <div id="carouselExample" className="carousel slide">

  <div className="carousel-inner">
    {scren.map((item,index)=>(
        <div className="carousel-item active">
        <img key={index} src={item.image} className="d-block w-100" alt="..." />
      </div>
      
    ))}
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />

  </button>
</div>
<h2 className='mt-2'>Additional Information</h2>
<div className="row">
    <div className="col-md-4 ">
        <span>Title</span>
        <p>{detailsGame.title}</p>
    </div>
    <div className="col-md-4">
        <span>Developer</span>
        <p>{detailsGame.developer}</p>
    </div>
    <div className="col-md-4">
        <span>Publisher</span>
        <p>{detailsGame.publisher}</p>
    </div>
    <div className="col-md-4">
<span>Release Date</span>
<p>{detailsGame.release_date}</p>
    </div>
    <div className="col-md-4">
<span>Genre</span><br/>
<span>{detailsGame.genre}</span>
    </div>
    <div className="col-md-4">
        <span>Platform</span>
        <p>{detailsGame.platform==='Windows'?<BsWindows/>:<IoMdBrowsers/>}</p>
    </div>
</div>


        </div>
    </div>
    :<div className="row">
    <div className="col-md-4">
        <div className="img-details">
            <img className='w-100 rounded-3' src={detailsGame.thumbnail} alt="" />
        </div>
        <div className="img-link">
        <button type="button" class="btn btn-secondary mt-2 rounded-2">Free</button>
        <a className='btn btn-info text-white w-75 mt-2 ms-3 rounded-2' target='_blank' href={detailsGame.game_url}>PLAY NOW</a>
        </div>
    </div>
    <div className="col-md-8">
        <h1>{detailsGame.title}</h1>
        <h5>About{detailsGame.title}</h5>
        <p className='description'>{detailsGame.description}</p>
    
        <h4>{detailsGame.title} Screenshots</h4>
       <div id="carouselExample" className="carousel slide">

<div className="carousel-inner">
{scren.map((item,index)=>(
    <div className="carousel-item active">
    <img key={index} src={item.image} className="d-block w-100" alt="..." />
  </div>
  
))}

</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true" />

</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true" />

</button>
</div>
<h2 className='mt-2'>Additional Information</h2>
<div className="row">
<div className="col-md-4 ">
    <span>Title</span>
    <p>{detailsGame.title}</p>
</div>
<div className="col-md-4">
    <span>Developer</span>
    <p>{detailsGame.developer}</p>
</div>
<div className="col-md-4">
    <span>Publisher</span>
    <p>{detailsGame.publisher}</p>
</div>
<div className="col-md-4">
<span>Release Date</span>
<p>{detailsGame.release_date}</p>
</div>
<div className="col-md-4">
<span>Genre</span><br/>
<span>{detailsGame.genre}</span>
</div>
<div className="col-md-4">
    <span>Platform</span>
    <p>{detailsGame.platform==='Windows'?<BsWindows/>:<IoMdBrowsers/>}</p>
</div>
</div>


    </div>
</div>
    }
    </>
  )
}
