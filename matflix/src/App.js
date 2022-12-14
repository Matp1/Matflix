import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './Tmdb';
import MovieList from './components/MovieList';
import PrincipalMovie from './components/PrincipalMovie'
import Header from './components/Header';

export default function App() {
  
  const [movieList, setMovieList] = useState ([]);
  const [principalData, setPrincipalData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      
      {principalData &&
      <PrincipalMovie item={principalData} />}

      <section className="lists">
        {movieList.map((item, key) => (
         <MovieList key={key} tittle={item.tittle} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com <span role="img" arial-label="coração">❤</span> pelo Dev Matheus Paiva
        Direitos de Imagem reservados a Netflix
        Direitos de imagem para o logo reservados a mim
        Dados pegos do site Themoviedb.org
      </footer>

          {movieList.length <= 0 && 
      <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
      </div>
          }
    </div>
  )
}

 
