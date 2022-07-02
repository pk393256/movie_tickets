import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

export const Bookings=()=> {
    const {isAuth} = useSelector(store => store);
    const [bookings, setBookings] = React.useState([]);
    
    const navigate = useNavigate();
    const bookingDone = async() => {
        
            let res =await fetch (`http://localhost:8080/moviesBooked`);
            let data = await res.json();
            setBookings(data);
        
    }

    const cancelBooking = async(id) => {
        try {
            await fetch(`http://localhost:8080/moviesBooked/${id}`, {
                method: "DELETE",
                });
            bookingDone();
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(()=>{
        if(!isAuth){
            navigate('/login');
        }else{
            bookingDone()
        }
        
    },[])
    
  return (
    <div style={{marginLeft:'35%',marginTop:'5%'}}>
        {
            bookings.map((movie, e)=>{
                return <div key={e}>
                    <table style={{border:"1px solid blue"}}>
                        <thead >
                            <tr >
                                <th>Movie Id</th>
                                <th>Name</th>
                                <th>Seat Number</th>
                                <th>Cancel Booking</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{border:"1px solid green"}}>{movie.movie_id}</td>
                                <td style={{border:"1px solid green"}}>{movie.name}</td>
                                <td style={{border:"1px solid green"}}>{movie.seat}</td>
                                <td ><button onClick={()=>{cancelBooking(movie.id)}}>Cancel Booking</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            })
        }
    </div>
  )
}
