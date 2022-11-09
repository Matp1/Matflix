import React from "react";
import './MovieList.css'

export default function MovieList({tittle, items}) {
  return(
    <div className="movieList">
      <h2>{tittle}</h2>
      <div className="movieList--listarea">

        <div className="movieList--list">
        {items.results.length > 0 && items.results.map((item, key)=>(
          <div key={key} className="movieList--item">
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_tittle} />
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}
