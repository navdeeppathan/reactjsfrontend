import { Alert, Box, Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

const ResetPassword = () => {
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
            password:data.get('password'),
           password_confirmation:data.get('password_confirmation')

        }
        // console.log(actualData)
        if(actualData.password&&actualData.password_confirmation){
            if(actualData.password === actualData.password_confirmation){
                console.log(actualData)
            document.getElementById('password-reset-form').reset()
            setError({status:true,msg:"Password Reset successfully...Redirect to login Page...",type:'success'})
            setTimeout(()=>{
                navigate('/login')
            },3000)

            }else{
                setError({status:true,msg:"password and confirm password does not match",type:'error'})
   
                }

        }else{
            setError({status:true,msg:"all fields are required",type:'error'})
        }
    }
  return (
   <> 
   <Grid container justifyContent='center'>
         <Grid item sm={6} xs={12}>
    <Box component='form' noValidate id="password-reset-form" sx={{mt:1}} onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
    <TextField margin="normal" required id="password" name="password" label='New Password' type='password' fullWidth/>

    <TextField margin="normal" required id="password_confirmation" name="password_confirmation" label=' New Confirm Password' type='password' fullWidth/>
        <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{mt:3,mb:2,px:5}}>Reset</Button>
        </Box>
        

        {error.status?<Alert severity={error.type}>{error.msg}</Alert>:''}
    </Box>
    </Grid>
    </Grid>

   </>
  )
}

export default ResetPassword