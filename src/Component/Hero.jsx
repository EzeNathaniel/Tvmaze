import React, {useRef} from 'react'
import {Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MediaCard2 from './MediaCard2';
import {IoMdArrowDroprightCircle, IoMdArrowDropleftCircle} from 'react-icons/io'



export default function HeroProducts({data,error,loading}) {

  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    direction === "left"
      ? (current.scrollLeft -= 1000)
      : (current.scrollLeft += 1000);
  };
  const findMovie = data.filter((accessMovie) => accessMovie.rating.average >= 7.5)
  return (
    <div className='mt-5'>
      <div className='position-relative'>
      <Link to='/tvshows' className='fw-2 text-dark'>
      <h6>TOP RATED</h6>
      </Link>
      </div>
    <div className='position-relative'>
      <div ref={scrollRef} className='d-flex scroll-body fah'>
        {loading && <Spinner/>}
        {(error || findMovie) && 
        <>
        {error && <p>Currently Unavailable</p>}
        {findMovie.map ((scripted)=>(
          <MediaCard2 key={scripted.id} {...scripted}/>

        ))}
        </>
        
        }

      </div>
      <div className='justify-content-between d-none d-md-flex align-items-center w-100 position-absolute' style={{top: '25%'}}>
         <IoMdArrowDropleftCircle className='text-white' size='3.2rem' style={{cursor:'pointer'}} onClick={()=>scroll('left')}/>
         <IoMdArrowDroprightCircle className='text-white' size='3.2rem' style={{cursor:'pointer'}} onClick={()=>scroll('right')}/>
      </div>
    </div>
    </div>
  )
}