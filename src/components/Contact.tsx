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
            <Box sx={{marginTop:10,border:2,padding:4,borderRadius:5}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.84755439032844!2d49.90965059996372!3d40.41857791939419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d72437970e9%3A0xdfab64580911af87!2zTWVkaWFzaXlhIMWedXJhc8Sx!5e0!3m2!1str!2saz!4v1707427312636!5m2!1str!2saz" width="1000" height="420" style={{margin:'auto',display:'block'}} loading="lazy"></iframe>
            </Box>

        </Container>
    </div>
  )
}
