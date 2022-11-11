import React, { useState } from "react";
import './MovieList.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MovieList({tittle, items}) {

  const [scrollX, setScrollX] = useState(-400)

  const onLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0
    }
    setScrollX(x)
  }

  const onRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 4);
    let listW = items.results.length * 150;
    if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
    }
    setScrollX(x)
  }

  return(
    <div className="movieList">
      <h2>{tittle}</h2>

      <div className="movieList--rowleft" onClick={onLeftArrow}>
        <NavigateBeforeIcon style={{fontSize:50}} />
      </div>
      <div className="movieList--rowright" onClick={onRightArrow}>
        <NavigateNextIcon style={{fontSize:50}} />
      </div>
      <div className="movieList--listarea">

        <div className="movieList--list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}>
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
