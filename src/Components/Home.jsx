import React from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const navigate=useNavigate()
    const [movies, setMovies] = React.useState([]);
    const fetchData = () => {
        fetch('http://localhost:8080/movies')
            .then((res) => res.json())
            .then((data) => setMovies(data))

    }
    const moreDeatils=(id)=>{
            navigate(`/${id}`)
    }
    React.useEffect(() => fetchData(), [])

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '15px' }}>
            {movies.map((e) => (
                <div key={e.id} style={{ border: '5px solid black' }}>
                    <h1>{e.original_title}</h1>
                    <p>{'release_date-'}{e.release_date}</p>
                    <img style={{ width: '200px' }} src={e.poster_path} />
                    <h6>{'original_language-'}{e.original_language}</h6>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>

                        <h6>{'popularity-'}{e.popularity}</h6>
                        <h6>{'vote_average-'}{e.vote_average}</h6>
                        <h6>{'vote_count-'}{e.vote_count}</h6>
                    </div>
                    <button style={{width:'100px',height:'30px'}} onClick={()=>moreDeatils(e.id)}>More Details</button>

                </div>
            ))}
        </div>
    )
}
