/* eslint-disable import/no-anonymous-default-export */
const apiKey = '0b528c86d6f54f35a8b17346c89e0ba7'
const apiBase = 'https://api.themoviedb.org/3'

/*
 Funções necessárias da Api: 
 
 - Originais da netflix
 - Recomendados para você
 - Em Alta (top rated)
 - ação
 - comédia
 - terror
 - romance
 - documentários

*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${apiBase}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getPrincipalList: async () => {
    return [
      {
        slug: 'Originals',
        tittle: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'trending',
        tittle: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${apiKey}`)
      },
      {
        slug: 'toprated',
        tittle: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${apiKey}`)
      },
      {
        slug: 'action',
        tittle: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${apiKey}`)
      },
      {
        slug: 'comedy',
        tittle: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${apiKey}`)
      },
      {
        slug: 'horror',
        tittle: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${apiKey}`)
      },
      {
        slug: 'romance',
        tittle: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${apiKey}`)
      },
      {
        slug: 'documentary',
        tittle: 'Documentários',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${apiKey}`)
      }
    ]
  }
}
