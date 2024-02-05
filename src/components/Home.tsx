import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton,Box,Grid, Container, Button} from '@mui/material'
import Photo1 from '../assert/mucGMvNOgpCNk3geMuAnblcwMCdnqi-metaRkJfSU1HXzE3MDYyOTM3MDk5MDEuanBn-.webp'
import Photo2 from '../assert/67WLnpBPFt39xgNWQKPwEu12Y6DbZB-metaRkJfSU1HXzE3MDM2OTQ5ODMwNzUuanBn-.webp'
import Photo3 from '../assert/8YwGsYsxWI7brq09YVhD1KGAzbNh7E-metaRkJfSU1HXzE3MDM2OTQ0OTA5OTIuanBn-.webp'
import Photo4 from '../assert/JJJbJV5MzQqlIHdc37wULKLNDvUpaQ-metaRkJfSU1HXzE3MDYwMzA5ODA0MzcuanBn-.webp'
import Photo5 from '../assert/QtBeB2d1PhRMEmBen2jhcth7QEWvmx-metaRkJfSU1HXzE3MDM2OTQ2MzM2MjcuanBn-.webp'
import Photo6 from '../assert/U3xeca2yG9dHHxl2X1YDVcAaKKqRKA-metaRkJfSU1HXzE3MDM4NzgyMTA5MTQuanBn-.webp'
import Photo7 from '../assert/V2sUGyuG1fLMSdf2V91nkCvwGySfHd-metaRkJfSU1HXzE3MDM4MzQ2NDAzOTkuanBn-.webp'
import Photo8 from '../assert/cRd2Cruszd5LxYCB11ZzoRmeH7pLok-metaRkJfSU1HXzE3MDM5NDQ4MTM5MTYuanBn-.webp'
import Photo9 from '../assert/f7vJL7VpfWCETlmo2AtOaW1d0RZk82-metaX2lubmV3c18wYmYwZTJmOWI5N2Y3Y2RjYzIyODk4NjMxX28uanBn-.webp'
import Photo10 from '../assert/gGqnu0hOZwMq2NQejE6aKYwQduBY41-metaRkJfSU1HXzE3MDM5NzMxOTQwODIuanBn-.webp'
import Photo11 from '../assert/l2ZYUZKGlczr5HzR0zGk9uV6LruwFS-metaRkJfSU1HXzE3MDU1Nzk0NDY4NzMuanBn-.webp'
import Photo12 from '../assert/mucGMvNOgpCNk3geMuAnblcwMCdnqi-metaRkJfSU1HXzE3MDYyOTM3MDk5MDEuanBn-.webp'
import Photo13 from '../assert/FA9869Y3B1X0jIJRcMrfHtZQe4H4hJ-metaRkJfSU1HXzE3MDY3MjgyNDk1MDYuanBn-.webp'
import Photo14 from '../assert/pZIpLAJl8FwjoQr4nWmBsMHQ8uTurI-metaSU1HLTIwMjQwMTEwLVdBMDAxMi5qcGc=-.webp'
import Photo15 from '../assert/tSWTqxB0yJi5zbgvyLUS7p7YD2Ah33-metaRkJfSU1HXzE3MDM5Mjg0MTgxNzguanBn-.webp'
import Photo16 from '../assert/Dro1jaM40NGNLhaDjyiDWYDUjDseKr-metaUlpiZWNTNjNibzdhUHJCaEQxUml3RE5ReGhrSGRNUkMzNGgwSVhEMS5wbmc=-.webp'
import Photo17 from '../assert/XEpbpdz8EgkUmjaMZXFtvi15h8haEi-metabWJacktQWFlZYlFwcUgyQnhpWE9UYWliN3V0ZlFFRHlUUmNDNGh0ei5wbmc=-.webp'
import Photo18 from '../assert/9htxo9E2MK4PMvzRYy41G2xUjTpq1P-metaVG5PVFFORDAwMzBiR2luUlB6ak01S3ZhaEFMWDhKemVMTjNRcGR2bi5wbmc=-.webp'
import Photo19 from '../assert/AasY2cxuXgHagWxnx1WGhcMg0fLCgp-metaaGdmY3BpS0c5TUV4dGFoRnN1emlGcHp4MGhiNGlXSkh3T3FBRHd1ci5wbmc=-.webp'
import Photo20 from '../assert/lxl0T8DhcRskUy5ScymAr7b4fboRZz-metaaUx5d05uUVRpNzdhNUhWN0JzMmNxcU5RMXZLMWtHNEo1VkJtMGZZaS5wbmc=-.webp'
import Photo21 from '../assert/T8UqlNz1ZdL3faTwoJk7q1RSC9zsX1-metaQXJ0Ym9hcmQgMS5qcGc=-.webp'
import Photo22 from '../assert/bWoiaU9yQVRABpOknoha3lmKbw0Ash-metaQXJ0Ym9hcmQgMSBjb3B5LmpwZw==-.jpeg'
import Photo23 from '../assert/KlrQmyh6u5Z04Jx1LNC0pw4RtQClkJ-metaQXJ0Ym9hcmQgMSBjb3B5IDIuanBn-.webp'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {Link} from 'react-router-dom'


export const Home = () => {
  return (
    <>
      <Box sx={{flexGrow:1,paddingX:2}}>

      <Grid container spacing={2} sx={{marginTop:0}}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
        <CardMedia
        sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo1}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to='/home/1'>
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
          </Link>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>2
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>0
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>5
          </IconButton>
        </CardActions>
       
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo2}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to='/home/:detailId'>
          <Typography variant='h6'>Mediasiya Şurası yanında Hüquqi Təminat və İnsan Hüquqları...</Typography>
          </Link>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>12
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>0
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>120
          </IconButton>
        </CardActions>
        
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo3}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to="/detail">
          <Typography variant='h6'>Mediasiya Şurası tərəfindən Emin Quliyevə rəsmi təşəkkür...</Typography>
          </Link>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>10
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>20
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>100
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo4}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to="detail">
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
          </Link>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>50
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>40
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>90
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo5}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to="/detail">
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
          </Link>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>45
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>23
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>56
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo6}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to="/detail">
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
          </Link>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>14
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>5
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>234
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo7}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to="/detail">
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
          </Link>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>12
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>12
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>30
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo8}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to="/detail">
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
          </Link>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>23
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>0
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>100
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo9}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>34
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>20
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>123
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo10}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>44
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>44
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>90
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo11}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>20
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>30
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>120
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo12}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>34
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>23
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>231
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo13}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>0
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>0
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>1
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo14}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}}>
            <ThumbUpIcon sx={{width:20}}/>75
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>11
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>100
          </IconButton>
        </CardActions>
        
         </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{marginTop:'40px'}}>
         <CardMedia
         sx={{height:240}}
        component="img"
        alt='newsImage'
        image={Photo15}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
        </CardContent>
        <CardActions>
          <IconButton sx={{fontSize:16}} >
            <ThumbUpIcon sx={{width:20}}/>120
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <ThumbDownAltIcon sx={{width:20}}/>23
          </IconButton>
          <IconButton sx={{fontSize:16}}>
            <RemoveRedEyeIcon sx={{width:20}}/>150
          </IconButton >
        </CardActions>
        
         </Card>
        </Grid>
      </Grid>
      </Box>
      <Box sx={{display:'flex',justifyContent:'center'}}>

      <Button sx={{bgcolor:'black',color:'white',marginY:5}}>Daha cox</Button>
      </Box>
      <Container maxWidth='lg'>

      <Box>

      <Grid container spacing={2} sx={{marginTop:0}}>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <img className='w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={Photo16} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <img className='w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={Photo17} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <img className='w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={Photo18} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <img className='w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={Photo19} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <img className='w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={Photo20} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <img className='w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={Photo21} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <img className='w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={Photo22} alt="" />
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3}>
          <img className='w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={Photo23} alt="" />
        </Grid>
        

      </Grid>
      </Box>
      </Container>
      
    </>
    
  )
}
