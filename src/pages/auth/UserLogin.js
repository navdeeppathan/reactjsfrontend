import { Alert, Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"


const UserLogin = () => {
     const [error,setError]=useState({
        status:false,
        msg:"",
        type:""
     })

     const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()

        const data =new FormData(e.currentTarget);
        const actualData={
            email:data.get('email'),
           password:data.get('password')

        }
        // console.log(actualData)
        if(actualData.email&&actualData.password){
            console.log(actualData)
            document.getElementById('login-form').reset()
            setError({status:true,msg:"login successfully",type:'success'})
            setTimeout(()=>{
                navigate('/dashboard')
            },2000)

        }else{
            setError({status:true,msg:"all fields are required",type:'error'})
        }
    }
  return (
   <> 
    <Box component='form' noValidate id="login-form" sx={{mt:1}} onSubmit={handleSubmit}>
        <TextField margin="normal" required id="email" name="email" label='Email Address' fullWidth/>
        <TextField margin="normal" required id="password" name="password" label='Password' type='password' fullWidth/>
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Login</Button>
        </Box>
        <NavLink to='/sendemailresetpassword'>Forgot Password</NavLink>

        {error.status?<Alert severity={error.type}>{error.msg}</Alert>:''}
    </Box>
   </>
  )
}

export default UserLogin