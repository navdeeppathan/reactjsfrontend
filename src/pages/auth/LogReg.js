import { Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material"
import Pic from '../../images/pic.png'
import { useState } from "react"
import UserLogin from "./UserLogin";
import UserRegist from "./UserRegist";
import { ShoppingBag } from "@mui/icons-material";

const TabPanel= (props) => {
    const {children,value,index}=props;
    return(
        <div role='tabpanel' hidden={value !== index}>
            {
             value === index &&(
                <Box>{children}</Box>
             )
            }
        </div>
    )
};

const LogReg = () => {
    const [value,setVal]=useState(0)
    const handleChange=(event,newValue)=>{
        setVal(newValue)
    }

  return (
    <>
    <Grid container sx={{height:'90vh'}}>
        <Grid item lg={7} sm={5} sx={{
            backgroundImage:`url( ${Pic})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:"center",
            display:{xs:"none",sm:"block"}
        }}> 

        </Grid>
        <Grid item lg={5} sm={7} xs={12} sx={{}}>
            <Card sx={{width:'100%',height:'100%'}}>
                <Box sx={{mx:3, height:524}}>
                    <Box sx={{borderBottom:1,borderColor:'divider'}} >
                        <Tabs textColor="secondary" indicatorColor="secondary" value={value} onChange={handleChange}>
                            <Tab label="Login" sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                            <Tab label="Registration" sx={{textTransform:'none',fontWeight:'bold'}}></Tab>

                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}><UserLogin/></TabPanel>
                    <TabPanel value={value} index={1}><UserRegist/></TabPanel>

                </Box>
                <Box textAlign='center' sx={{mt:2}}>
                    <ShoppingBag sx={{color:'purple' ,fontSize:60}}/>
                    <Typography variant="h5" sx={{fontWeight:'bold'}}>Online-Shop</Typography>
                </Box>
            </Card> 

        </Grid>
    
    </Grid>
    </>
  )
};

export default LogReg