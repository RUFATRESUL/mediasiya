import { parse } from 'path/posix';
import React, { useState } from 'react'
import { Container,Box,IconButton,Button,Drawer,Typography,TextField,Grid,Card,CardActions,CardContent,CardMedia } from '@mui/material';
import Textarea from '@mui/joy/Textarea'
import {useParams} from 'react-router-dom'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import {CarouselProvider,Slider,Slide,ButtonBack,ButtonNext} from 'pure-react-carousel'
import "pure-react-carousel/dist/react-carousel.es.css"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ClearIcon from '@mui/icons-material/Clear';
import Image01 from '../assert/V2sUGyuG1fLMSdf2V91nkCvwGySfHd-metaRkJfSU1HXzE3MDM4MzQ2NDAzOTkuanBn-.webp'
import Image02 from '../assert/JJJbJV5MzQqlIHdc37wULKLNDvUpaQ-metaRkJfSU1HXzE3MDYwMzA5ODA0MzcuanBn-.webp'
import Image03 from '../assert/f7vJL7VpfWCETlmo2AtOaW1d0RZk82-metaX2lubmV3c18wYmYwZTJmOWI5N2Y3Y2RjYzIyODk4NjMxX28uanBn-.webp'
import Image04 from '../assert/detail01.webp'
import Image05 from '../assert/detail02.webp'
import Image06 from '../assert/detail03.webp'
import Image07 from '../assert/detail04.webp'
import Image08 from '../assert/detail05.webp'
import Image09 from '../assert/detail06.webp'
import Image10 from '../assert/detail07.webp'
import Image11 from '../assert/detail08.webp'
import Image12 from '../assert/detail09.webp'
import Link from 'react-router-dom'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
interface Params{
    detailId:string ;
    [key:string]:string | undefined;
  }
const items = [
    { id: 1,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F196%2FaI71kxGW1g7K3Vg4iLLLelnhRbP2AX-metaRkJfSU1HXzE3MDY2MzQyNzUxODEuanBn-.webp&w=1920&q=75',
      title:'AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib.',
      content:'30 yanvar 2024-cü il tarixində mediasiya təlim qurumu olan Ədliyyə Akademiyasında ixtisaslaşmış ailə və əmək mediasiya təlimlərini başa vuran mediatorların yekun imtahanı keçirilmişdir.İmtahanda “Mediatorların hazırlığı və ixtisaslarının artırılması ilə bağlı Təlim Qaydası”nın təsdiq edilməsi barədə Nazirlər Kabinetinin Qərarına uyğun olaraq, İmtahan Komissiyası tərəfindən mediasiya ilə bağlı namizədlərin nəzəri və təcrübi bilikləri yoxlanılmışdır. İmtahan Komissiyasının sədri, Ədliyyə Akademiyasının prorektoru Elçin Xələfov, Komissiyanın üzvləri Mediasiya Şurası İdarə Heyətinin sədri Nadir Adilov, Komissiyanın müstəqil ekspert üzvü, Azərbaycan Respublikası Məhkəmə Hakimləri Assosiasiyaları İttifaqının nümayəndəsi, Vəkillər Kollegiyasının üzvü Kəramət Əliyev mediatorlara ailə və əmək münasibətlərindən irəli gələn mübahisələr üzrə mediasiya ilə bağlı istiqamətlər üzrə suallar verib və mediatorların bilik səviyyəsini qiymətləndiriblər.' },
     {
        id:2,
        image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F193%2FJJJbJV5MzQqlIHdc37wULKLNDvUpaQ-metaRkJfSU1HXzE3MDYwMzA5ODA0MzcuanBn-.webp&w=1920&q=75',
        title:'Bu gün Mediasiya Şurası Etika Komitəsinin yeni tərkibli ilk iclası keçirilib.',
        content:'Mediasiya Şurası Etika Komitəsinin sədri Aqil Əsgərovun rəhbərliyi ilə keçirilən iclasda Komitənin üzvləri – Tural Məmmədov, Zümrüd Əsgərova, Əli Qəniyev və Komitənin katibi Əkbər Cəfərli iştirak ediblər.İclasda Etika Komitəsinin qarşısında duran əsas məqsəd və vəzifələr, gələcək hədəflər və iş prosesi müzakirə edilib. Əlavə olaraq etik davranış pozuntuları zamanı baxılmalı olan işlərə dair reqlamentlər, 2024- cü ildə Komitənin qarşısında duran məsələlər və Komitənin iş planı, Komitəyə daxil olan şikayətlərə baxılması məsələləri müzakirə edilib.'
     }   
  ];

export const Detail:React.FC = () => {
    const {detailId} = useParams<Params>();
    console.log(detailId);
    const [open, setOpen] = useState(false)
    
  return (
    <div>
        
    {items.map((item) => (
      <div key={item.id}>
        {typeof detailId !== 'undefined' && item.id === parseInt(detailId, 10) && (
            
            <>
                <div className='md:container m-auto flex flex-col justify-center items-center'>
                    <div className='flex-col text-center my-10'>
                      {/* /------------------------------------------------------- */}
                        <div className='flex justify-center items-center sm:w-full'>
                        <img className='md:w-[70%] rounded-2xl'  src={item.image} alt="" />
                        </div>
                        {/* /---------------------------------------------------- */}
                        <div className='flex justify-around mt-2 text-gray-600 sm:w-full'>
                            <div className='w-36 h-10 flex justify-center items-center'>
                            <IoCalendarNumberOutline className='text-3xl'/> 
                            <h4 className='pl-2 font-medium'>1 gun əvvəl</h4>
                            </div>
                            <div className='w-36 h-10 flex justify-center items-center'>
                                <FaRegEye className='text-3xl'/>
                                <h4 className='pl-2 font-medium'>207</h4>
                            </div>
                        </div>
                        {/* /------------------------------------------------------------- */}
                        <div className='w-[60%] m-auto sm:w-full'>
                        <h1 className='font-bold text-3xl sm:w-full'>{item.title}</h1>
                        <p className='pt-6 text-lg text-gray-600 sm:w-full text-center'>{item.content}</p>
                        </div>
                        {/* /--------------------------------------------------------------- */}
                    </div>
                    {/* /---------------------------------------------------------- */}
                    <div className='w-[100%] h-[26rem]'>
                      
                      <CarouselProvider
                        naturalSlideWidth={150}
                        naturalSlideHeight={100}
                        totalSlides={3}
                        className='w-[50%] m-auto relative rounded-lg sm:w-full'
                      >
                        <Slider className='h-[25rem] w-full'>
                          <Slide index={0}><img className=' object-cover w-full h-full' src={Image01} alt="" /></Slide>
                          <Slide index={1}><img className=' object-cover w-full h-full' src={Image02} alt="" /></Slide>
                          <Slide index={2}><img className='object-cover w-full h-full' src={Image03} alt="" /></Slide>
                        </Slider>
                        <ButtonBack className='absolute top-[10rem] left-2 bg-slate-50 rounded-lg h-10'><ArrowLeftIcon className='text-gray-400' /></ButtonBack>
                        <ButtonNext className='absolute top-[10rem] right-2 bg-slate-50 rounded-lg h-10'><ArrowRightIcon className='text-gray-400' /></ButtonNext>
                      </CarouselProvider>
                      {/* /------------------------------------------------- */}
                      <div className='pt-6 w-[52%] m-auto sm:w-full md:w-full'>

                        <hr className='w-full' />
                        {/* <div className=' flex justify-around items-center'>
                        <div className='bg-blue-600 rounded-lg p-1 text-white absolute left-[26rem]'>Dunya</div>
                        <div className='relative'>
                        <IconButton className='absolute right-[-17rem]'><ThumbUpOffAltIcon/>3</IconButton>
                        <IconButton className='absolute right-[-17rem]'><ThumbDownOffAltIcon/>0</IconButton>
                        </div>
                        </div> */}
                        <hr className='w-full' />
                        </div>
                  </div>
                {/* /------------------------------------------------------- */}
                <div className='w-[52%] sm:w-full pt-16'>
                <h1 className='p-4 text-2xl'>Şərhlər (0)</h1>
                <Button className='w-full sm:w-full h-12' variant="outlined" onClick={()=>setOpen(true)}><IconButton ><AddCommentIcon/></IconButton></Button>
                <Drawer open={open} anchor='bottom' onClose={()=>setOpen(false)}>
                  <IconButton onClick={()=>setOpen(false)}><ClearIcon className='absolute right-2 top-2'/></IconButton>
                  <Box textAlign="center" sx={{display:'flex',flexDirection:'column',marginX:40, marginY:6}}>
                        <Typography variant='h6'sx={{color:'blue'}}>AR Ədliyyə Nazirliyinin Ədliyyə Akademiyasında mediatorların imtahanı keçirilib. məqaləsinə şərh yazmaq</Typography>
                        <TextField variant='outlined' label='Ad və Soyad' sx={{marginTop:6}}/>
                        <TextField variant='outlined' label='E-poct unvani'sx={{marginTop:6}}/>
                        <Textarea minRows={6} sx={{marginTop:6}} placeholder='Şərhiniz daxil edin' />
                        <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center',marginTop:2}}>
                          <Button sx={{border:'solid',borderColor:'gray',borderWidth:1}}>Ləğv et</Button>
                          <Button sx={{backgroundColor:'blue',color:'white',":hover":{color:'blue'}}}>Göndər</Button>
                        </Box>
                       
                  </Box>
                </Drawer>
                </div>
                {/* /------------------------------------------------------- */}
             
                </div>
                
            
            </>
        )}
      </div>
    ))}
       <Box sx={{flexGrow:1,paddingX:5}}>
                  <Grid container spacing={2} sx={{marginTop:0}}>
                  <Grid item xs={12} sm={12} md={6} lg={4} sx={{width:370}}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image04}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image05}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image06}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image07}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image08}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image09}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image10}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image11}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                   <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Card sx={{marginTop:'40px'}}>
                   <CardMedia
                   sx={{height:240}}
                   component="img"
                   alt='newsImage'
                   image={Image12}
                   />
                   <CardContent>
                     <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
                     <Typography variant='h6'>Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün...</Typography>
                   </CardContent>
                   <CardActions>
                     <IconButton>
                       <ThumbUpIcon/>
                     </IconButton>
                     <IconButton>
                       <ThumbDownAltIcon/>
                     </IconButton>
                     <IconButton>
                       <RemoveRedEyeIcon/>
                     </IconButton>
                   </CardActions>
                                  
                   </Card>
                   </Grid>
                  

                  </Grid>
        </Box>
    
  </div>
    
  )
}
