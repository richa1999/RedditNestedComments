import React, {useEffect, useState} from 'react'
import {MemeCard} from './MemeCard'
import Shimmer from './Shimmer'


const Body = () => {
  const [memes, setMemes] = useState([]);
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    fetchMemes();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchMemes = async () => {
    setShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  }

  const handleScroll = () =>{
    if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
        fetchMemes();
    }
  }

  return (
    <div className='flex flex-wrap'>
        {memes.map((memes, i) => <MemeCard key={i} memes={memes} />)}

        {shimmer && <Shimmer />}
    </div>
  )
}

export default Body