import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillPlusSquare } from 'react-icons/ai';
import { BsWindows } from 'react-icons/bs';
import { IoMdBrowsers } from 'react-icons/io';


export default function Categonries() {
  const [categonriesGames, setcategonriesGames] = useState([]);
  const [more, setmore] = useState(20);
  let { path } = useParams();
  useEffect(() => {
    categoriesGame(path);
  }, [path]);

  let categoriesGame = async (path) => {
    let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/games`, {
      params: { category: path },
      headers: {
        'X-RapidAPI-Key':
          'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
    setcategonriesGames(data);
  }
  let showMore=()=>{
    setmore((prevValue)=>prevValue+20);
  }
  return (
    <>

      <div className="row g-4  ">
        {categonriesGames.slice(0,more).map((item, index) => (
          <div className="col-md-3 All  ">

            <Link className='nav-link' to={`/details/${item.id}`}>
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
                <div className="div text-muted text-center">
                  <span><h6 key={index} className='div p-2' >{item.short_description}</h6></span>
                </div>
                <div className="icons  d-flex  justify-content-between">
                  <span className='m-2' ><AiFillPlusSquare /></span>
                  <div>
                    <span key={index} className='text-muted bordgnre text-center ps-1'>{item.genre}  </span> <span><span> {item.platform === "PC (Windows)" ? <BsWindows className='m-2' /> : <IoMdBrowsers className='m-2' />}</span></span>
                  </div>
                </div>


              </div>

            </Link>
          </div>



        ))}
 <div className="div m-auto d-flex py-4">
    <button onClick={showMore} type="button" class="btn btn-outline-secondary m-auto">More Games</button>

  </div>

      </div>


    </>
  )
}
