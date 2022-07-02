import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Movie = () => {
    const [allBookedMovie, setAllBookedMovie] = React.useState([]);
    const [currentMovieData, setCurrentMovieData] = React.useState({})
    const [booked, setBooked] = React.useState(false)
    const [name, setName] = React.useState("");
    const [seat, setSeat] = React.useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const isBooked = (allBookedMovie, id) => {
        setBooked(false)
        allBookedMovie.map((e) => {
            if (e.movie_id == id) {
                setBooked(true)
            }
        })
    }
    // const fetchAllBookedMovie=async()=>{
    //     let res=await fetch(`http://localhost:8080/moviesBooked`);
    //     let data=await res.json();
    //     setAllBookedMovie(data)
    // }
    const handler =()=>{
        const payload={
            movie_id:id,name:name,seat:seat
        }
        fetch('http://localhost:8080/moviesBooked',{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>res.json())
        .then((res)=>setBooked(true))
        .catch((error)=>console.log(error))
    }
    const fetchCurrentAndAll = async (id) => {
        let res = await fetch(`http://localhost:8080/movies/${id}`);
        let data = await res.json();
        setCurrentMovieData(data)
        let ress = await fetch(`http://localhost:8080/moviesBooked`);
        let dataa = await ress.json();
        setAllBookedMovie(dataa)

    }
    React.useEffect(() => { fetchCurrentAndAll(id); isBooked(allBookedMovie, id) }, [])

    return (
        <div>
            <h1>{currentMovieData.title}</h1>
            <img style={{width:'300px'}} src={currentMovieData.poster_path} />
            <p style={{width:'700px',textAlign:'center',marginLeft:'20%',color:'green'}}>{currentMovieData.overview}</p>
            {/* <p>{'la'}{}</p> */}

            {booked?<><button onClick={()=>navigate('/bookings')}>Show Bookings</button><button onClick={() => navigate('/')}>Home Page</button></>:
            <><input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder="Seat" value={seat} onChange={(e) => setSeat(e.target.value)} />
            <br></br>
            <button onClick={handler}>Book Seat</button>
            <button onClick={() => navigate('/')}>Home Page</button></>
            }
            
        </div>
    );
}
