import React from 'react';
import { statusSuccess } from '../Authentication/authAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Login=()=> {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const {isAuth}=useSelector((store)=>store)
    console.log(isAuth)
    const whereToGo=(isAuth)=>{
        if(isAuth){
            navigate('/')
        }else{
            navigate('/login')
        }
    }
    function handler(){
            const payload={
                email,password
            }
            fetch('https://reqres.in/api/login',{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            .then((res)=>res.json())
            .then((res)=> {res.token=="QpwL5tke4Pnpja7X4"? dispatch(statusSuccess(true))
            :dispatch(statusSuccess(false))})
    }
   React.useEffect(()=>whereToGo(isAuth),[isAuth,dispatch])
   
    
  return (
    <div>
        
            <input type="email" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            <button onClick={handler}>Login</button>
            
    </div>
  )
}
