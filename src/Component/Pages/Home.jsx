import React from 'react'
import Hero from '../Hero'
import HeroComponent from '../HeroComponent'
import HeroProducts from '../HeroProducts'
import useFetch  from '../Hooks/useFetch'

export default function Home() {
    const {data, error, loading} = useFetch('https://api.tvmaze.com/shows?page=1')
    console.log(data);

  return (
    <>
    <HeroComponent/>
    <div className='container-lg mt-5 py-3'>
        <h3 className='fw-2'>TV SHOWS</h3>
    </div>
    <HeroProducts data={data} error={error} loading={loading}/>
    <Hero data={data} error={error} loading={loading}/>
    </>
  )
}