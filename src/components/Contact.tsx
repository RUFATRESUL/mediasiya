import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import{Box,Container,Typography,Card,CardContent,IconButton,Grid} from '@mui/material'
export const Contact = () => {
  return (
    <div>
        <Container maxWidth="lg">
            <Box >
                <Typography variant='h4' sx={{textAlign:'center',marginTop:5}}>Əlaqə</Typography>
                <Grid container spacing={2} sx={{marginTop:2}}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                         <Card elevation={4} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',borderRadius:5}}>
                             <IconButton>
                                 <FiPhone className='text-blue-600 text-4xl' />
                             </IconButton>
                             <CardContent sx={{textAlign:'center'}}>
                                 <Typography variant='h6' sx={{color:'gray'}}>Telefon</Typography>
                                 <Typography>(012) 1927</Typography>
                             </CardContent>
                         </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                         <Card elevation={4} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',borderRadius:5}}>
                             <IconButton>
                                 <MdOutlineAlternateEmail className='text-blue-600 text-4xl' />
                             </IconButton>
                             <CardContent sx={{textAlign:'center'}}>
                                 <Typography variant='h6' sx={{color:'gray'}}>E-mail</Typography>
                                 <Typography>info@mediasiya.gov.az</Typography>
                             </CardContent>
                         </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                         <Card elevation={4} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',borderRadius:5}}>
                             <IconButton>
                                 <IoLocationOutline className='text-blue-600 text-4xl' />
                             </IconButton>
                             <CardContent sx={{textAlign:'center'}}>
                                 <Typography variant='h6' sx={{color:'gray'}}>Ünvan</Typography>
                                 <Typography>Bakı şəhəri, Heydər Əliyev prospekti 115, Sport Plaza</Typography>
                             </CardContent>
                         </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                         <Card elevation={4} sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',borderRadius:5}}>
                             <IconButton>
                                 <FaRegCalendarAlt  className='text-blue-600 text-4xl' />
                             </IconButton>
                             <CardContent sx={{textAlign:'center'}}>
                                 <Typography variant='h6' sx={{color:'gray'}}>Qəbul günləri</Typography>
                                 <Typography>Bazar ertəsi - Cümə9:00-18:00</Typography>
                             </CardContent>
                         </Card>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    </div>
  )
}
