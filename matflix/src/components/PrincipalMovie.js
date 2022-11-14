import React from "react";
import './PrincipalMovie.css'

export default function PrincipalMovie({item}) {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name )
    }
    let description = item.overview
    if(description.length > 200) {
        description = description.substring(0, 200) + '...'
    }

    return(
        <section className="principal" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="principal--vertical">
                <div className="principal--horizontal">
                    <div className="principal--name">{item.original_name}</div>
                    <div className="principal--info">
                        <div className="principal--average">{item.vote_average} pontos</div>
                        <div className="principal--year">{firstDate.getFullYear()}</div>
                        <div className="principal--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className="principal--overview">
                            {description}
                        </div>
                        <div className="principal--buttons">
                            <a href={`/watch/${item.id}`} className="principal--watchbutton"> ▶ Assistir</a>
                            <a href={`/list/add/${item.id}`} className="principal--mylistbutton">+ Minha Lista</a>
                        </div>
                        <div className="principal--genres">
                            <strong>Gêneros:</strong> {genres.join(', ')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
