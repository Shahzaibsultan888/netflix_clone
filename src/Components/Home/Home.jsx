import React, { useEffect, useState } from 'react'
import './Home.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'
import{BiPlay}from 'react-icons/bi'
import{AiOutlinePlus}from 'react-icons/ai'
const apiKey = '935ab3dbb7320ac39b4b8f4c12d7afc8'
const url = 'https://api.themoviedb.org/3'
const imgUrl = 'https://image.tmdb.org/t/p/original'
const upcoming = 'upcoming'
const nowPlaying = 'now_playing'
const popular = 'popular'
const topRated = 'top_rated'
const Card = ({ image }) => (

  <img className='card' src={image} alt="cover" />
)
const Row = ({ title,arr=[

] }) => (
  <div className='row'>
    <h2>{title}</h2>
    <div>
      {
       arr.map((item,index)=>(
      <Card key={index} image={`${imgUrl}/${item.poster_path}`} />
       ))
      }
</div>
  </div>
)

const Home = () => {
  const [upcomingMovies,setUpcomingMovies] = useState([])
  const [nowPlayingMovies,setnowPlayingMovies] = useState([])
  const [popularMovies,setPopularMovies] = useState([])
  const [topRatedMovies,setTopRatedMovies] = useState([])
  const [genre,setgenre] = useState([])

  useEffect(()=>{
    const fetchUpcomming = async()=>{
      try{
        const {data:{results}}= await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
      setUpcomingMovies(results)
    
      
      }
      catch(error){
        console.error(error)
      }
    }
    const fetchNowPlaying = async()=>{
      try{
        const {data:{results}}= await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
      setnowPlayingMovies(results)
    
      
      }
      catch(error){
        console.error(error)
      }
    }
    const fetchPopular = async()=>{
      try{
        const {data:{results}}= await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
      setPopularMovies(results)
    
      
      }
      catch(error){
        console.error(error)
      }
    }
    const fetchToprated = async()=>{
      try{
        const {data:{results}}= await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
      setTopRatedMovies(results)
    
      
      }
      catch(error){
        console.error(error)
      }
    }
    const getAllGenre = async()=>{
      try{
        const {data:{genres}}= await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
      setgenre(genres)
    
      
      }
      catch(error){
        console.error(error)
      }
    }
    getAllGenre()
    fetchUpcomming()
    fetchNowPlaying()
    fetchPopular()
    fetchToprated()
    
   
  },[])
  useEffect(()=>{
    
  },[upcomingMovies])
  useEffect(()=>{
    
  },[nowPlayingMovies])
  useEffect(()=>{
    
  },[popularMovies])
  useEffect(()=>{
    
  },[topRatedMovies])
  useEffect(()=>{
    
  },[genre])

  return (
    <section className="home">
      <div className="banner" style={
        {backgroundImage:popularMovies[1]?`url(${`${imgUrl}/${popularMovies[1].poster_path}`})` : "rgb(0,0,0)"}
            }>
             {
               popularMovies[1]&&(
                <h1>{popularMovies[1].original_title}</h1>)
              
             }
           {
              popularMovies[1]&&(
                <p>{popularMovies[1].overview}</p>
               )

      
           }
           <div>
           <button><BiPlay/>Play </button>
           <button>My List <AiOutlinePlus/></button>
           </div>
      </div>
      <Row title={'Upcoming '} arr={upcomingMovies}/>
      <Row title={'NowPlaying '} arr={nowPlayingMovies}/>
      <Row title={'Popular '} arr={popularMovies}/>
      <Row title={'Top Rated '} arr={topRatedMovies}/>

      <div className="genrebox">
        {genre.map((item)=>{
          return(
          <Link key={item.id} to={`/genre${item.id}`}>{item.name}</Link>)
        })}
      </div>
      
      
    </section>
  )
}

export default Home