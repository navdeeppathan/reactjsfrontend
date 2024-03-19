import { Alert, Box, Button,  Checkbox,  FormControlLabel,  TextField } from "@mui/material"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

const UserRegist = () => {
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
             name:data.get('name'),
             email:data.get('email'),
             password:data.get('password'),
            password_confirmation:data.get('password_confirmation'),
            tc:data.get('tc'),
 
         }
         // console.log(actualData)
         if(actualData.name&&actualData.email&&actualData.password&&actualData.password_confirmation &&actualData.tc!==null){
             if(actualData.password === actualData.password_confirmation){
                console.log(actualData)
                document.getElementById('registration-form').reset()
                setError({status:true,msg:"registration successfully",type:'success'})
                setTimeout(()=>{
                    navigate('/dashboard')
                },2000)
             }else{
             setError({status:true,msg:"password and confirm password does not match",type:'error'})

             }
         }else{
             setError({status:true,msg:"all fields are required",type:'error'})
         }
     }
  return (
    <>
    <Box component='form' noValidate id="registration-form" sx={{mt:1}} onSubmit={handleSubmit}>
        <TextField margin="normal" required id="name" name="name" label='Name' fullWidth/>
        <TextField margin="normal" required id="email" name="email" label='Email Address' fullWidth/>
        <TextField margin="normal" required id="password" name="password" label='Password' type='password' fullWidth/>

        <TextField margin="normal" required id="password_confirmation" name="password_confirmation" label=' Confirm Password' type='password' fullWidth/>
        <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc"/>} label="I agree to term and condition"/>
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Join</Button>
        </Box>
      
        {error.status?<Alert severity={error.type}>{error.msg}</Alert>:''}
    </Box>
    </>
  )
}

export default UserRegist