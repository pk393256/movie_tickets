import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { statusSuccess } from '../Authentication/authAction';
// import { toggleAuth } from '../../Redux/Login/action';

export const Navbar=()=> {
    const {isAuth} = useSelector((store) => store);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        // dispatch(toggleAuth());
    }
  return (
    <div style={{display:'flex',gap:'200px',marginLeft:'350px'}}>
       {
           isAuth?<>
           <Link to='/'>Home</Link>
           <Link to='/bookings'>Bookings</Link>
           <Link to='/login'><button onClick={()=>dispatch(statusSuccess(false))}>Logut</button></Link>
           </>:
           <>
           <Link to='/login'>Home</Link>
           <Link to='/login'>Bookings</Link>
           <Link to='/login'>Login</Link>
           
           </>
       }
    </div>
  )
}
