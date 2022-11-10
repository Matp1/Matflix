import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieList from './components/MovieList';
import PrincipalMovie from './components/PrincipalMovie'

export default function App() {
  
  const [movieList, setMovieList] = useState ([]);
  const [principalData, setPrincipalData] = useState(null);

  useEffect(() => {
    const load = async () => {
      // Pegando as listas do Tmdb
      let list = await Tmdb.getPrincipalList();
      setMovieList(list);

      // Pagando o Principal
      let originals = list.filter(i => i.slug === 'Originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setPrincipalData(chosenInfo);
    }
    load();
  }, [])

  return (
    <div className="page">

      {principalData &&
      <PrincipalMovie item={principalData} />}

      <section className="lists">
        {movieList.map((item, key) => (
         <MovieList key={key} tittle={item.tittle} items={item.items} />
        ))}
      </section>
    </div>
  )
}

 
