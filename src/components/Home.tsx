import React, { useState } from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton,Box,Grid, Container, Button,Pagination} from '@mui/material'
import CardCover from '@mui/joy/CardCover'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Link} from 'react-router-dom'

export const Home = () => {
  const [page, setPage] = useState(1);
  const ItemsPerPage =4
  const data =[
    {
      id:1,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F194%2FmucGMvNOgpCNk3geMuAnblcwMCdnqi-metaRkJfSU1HXzE3MDYyOTM3MDk5MDEuanBn-.webp&w=1920&q=75',
      content:"Möhtərəm cənab Prezident İlham Əliyev tərəfindən bu gün..."
    },
    {
      id:2,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F193%2FJJJbJV5MzQqlIHdc37wULKLNDvUpaQ-metaRkJfSU1HXzE3MDYwMzA5ODA0MzcuanBn-.webp&w=1920&q=75',
      content:"Bu gün Mediasiya Şurası Etika Komitəsinin yeni tərkibli ilk iclası"
    },
    {
      id:3,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F192%2Fl2ZYUZKGlczr5HzR0zGk9uV6LruwFS-metaRkJfSU1HXzE3MDU1Nzk0NDY4NzMuanBn-.webp&w=1920&q=75',
      content:"Baş Prokurorluqda mediatorlar üçün maarifləndirici seminar"
    },
    {
      id:4,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F191%2Ff7vJL7VpfWCETlmo2AtOaW1d0RZk82-metaX2lubmV3c18wYmYwZTJmOWI5N2Y3Y2RjYzIyODk4NjMxX28uanBn-.webp&w=1920&q=75',
      content:"Tezliklə e-mediasiya platforması istifadəyə veriləcək...."
    },
    {
      id:5,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F190%2FpZIpLAJl8FwjoQr4nWmBsMHQ8uTurI-metaSU1HLTIwMjQwMTEwLVdBMDAxMi5qcGc%3D-.webp&w=1920&q=75',
      content:"Türkiyənin tanınmış hüquq professoru Mediasiya Şurasında ..."
    },
    {
      id:6,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F185%2FgGqnu0hOZwMq2NQejE6aKYwQduBY41-metaRkJfSU1HXzE3MDM5NzMxOTQwODIuanBn-.webp&w=1080&q=75',
      content:"Beynəlxalq ekspertlərin iştirakı ilə Mediasiya proseslərinin..."
    },
    {
      id:7,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F184%2FcRd2Cruszd5LxYCB11ZzoRmeH7pLok-metaRkJfSU1HXzE3MDM5NDQ4MTM5MTYuanBn-.webp&w=1080&q=75',
      content:"Aynur Sabitova Fəxri mediator diplomu ilə təltif edilib...."
    },
    {
      id:8,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F183%2FzM9q2XHydzeqsP0q1NdstwnloU0WgY-metaRkJfSU1HXzE3MDM5MjkxMTA3NzEuanBn-.webp&w=1080&q=75',
      content:"Ombudsman Səbinə Əliyeva Fəxri mediator diplomu ilə təltif edilib..."
    },
    {
      id:9,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F182%2FtSWTqxB0yJi5zbgvyLUS7p7YD2Ah33-metaRkJfSU1HXzE3MDM5Mjg0MTgxNzguanBn-.webp&w=1080&q=75',
      content:"Kənd Təsərrüfatı Nazirliyi yanında Aqrar Kredit və İnkişaf Agentliyi və..."
    },
    {
      id:10,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F181%2FU3xeca2yG9dHHxl2X1YDVcAaKKqRKA-metaRkJfSU1HXzE3MDM4NzgyMTA5MTQuanBn-.webp&w=1080&q=75',
      content:"Nadir Adilov:Nazirlər Kabinetinin mediasiya ilə bağlı qərarı 2023-ci"
    },
    {
      id:11,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F180%2FV2sUGyuG1fLMSdf2V91nkCvwGySfHd-metaRkJfSU1HXzE3MDM4MzQ2NDAzOTkuanBn-.webp&w=1080&q=75',
      content:"28 dekabr 2023-ci il tarixində Bakı 20 saylı Mediasiya Təşkilatının..."
    },
    {
      id:12,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F179%2F67WLnpBPFt39xgNWQKPwEu12Y6DbZB-metaRkJfSU1HXzE3MDM2OTQ5ODMwNzUuanBn-.webp&w=1080&q=75',
      content:"“Mediasiya və Türk Dünyası Mediatorlar Birliyi” mövzusunda onlayn konfrans keçirilib...."
    },
    {
      id:13,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F177%2F8YwGsYsxWI7brq09YVhD1KGAzbNh7E-metaRkJfSU1HXzE3MDM2OTQ0OTA5OTIuanBn-.webp&w=1080&q=75',
      content:"Sosial-İqtisad Kolleci ilə Mediasiya Şurası arasında səmərəli..."
    },
    {
      id:14,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F176%2FeYjZpH52LjYcnDhQ8S05ca3aVtLPcc-metaRkJfSU1HXzE3MDM2OTQxODk1NjMuanBn-.webp&w=1080&q=75',
      content:"Mediasiya Şurası yanında Hüquqi Təminat və İnsan Hüquqları ..."
    },
    {
      id:15,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F174%2FqgNxeirUSwUBs9pDfkWayBKRqpuKI6-metaRkJfSU1HXzE3MDM2NTk4MTY4MjUuanBn-.webp&w=1080&q=75',
      content:"Ali Məhkəmənin Mülki və Kommersiya kollegiyalarına daxil..."
    }
  ]
  const images = [
    {
      id:1,
      image:"https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F15%2FDro1jaM40NGNLhaDjyiDWYDUjDseKr-metaUlpiZWNTNjNibzdhUHJCaEQxUml3RE5ReGhrSGRNUkMzNGgwSVhEMS5wbmc%3D-.png&w=256&q=75",
      link:'https://president.az/'
    },
    {
      id:2,
      image:"https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F16%2FXEpbpdz8EgkUmjaMZXFtvi15h8haEi-metabWJacktQWFlZYlFwcUgyQnhpWE9UYWliN3V0ZlFFRHlUUmNDNGh0ei5wbmc%3D-.png&w=256&q=75",
      link:'https://mehriban-aliyeva.az/'
    },
    {
      id:3,
      image:"https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F17%2F9htxo9E2MK4PMvzRYy41G2xUjTpq1P-metaVG5PVFFORDAwMzBiR2luUlB6ak01S3ZhaEFMWDhKemVMTjNRcGR2bi5wbmc%3D-.png&w=256&q=75",
      link:'https://heydar-aliyev-foundation.org/az'
    },
    {
      id:4,
      image:"https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F18%2FAasY2cxuXgHagWxnx1WGhcMg0fLCgp-metaaGdmY3BpS0c5TUV4dGFoRnN1emlGcHp4MGhiNGlXSkh3T3FBRHd1ci5wbmc%3D-.png&w=256&q=75",
      link:'https://www.virtualkarabakh.az/'
    },
    {
      id:5,
      image:"https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F19%2Flxl0T8DhcRskUy5ScymAr7b4fboRZz-metaaUx5d05uUVRpNzdhNUhWN0JzMmNxcU5RMXZLMWtHNEo1VkJtMGZZaS5wbmc%3D-.png&w=256&q=75",
      link:'https://azerbaijan.az/'
    },
    {
      id:6,
      image:"https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F93%2FKlrQmyh6u5Z04Jx1LNC0pw4RtQClkJ-metaQXJ0Ym9hcmQgMSBjb3B5IDIuanBn-.jpg&w=256&q=75",
      link:'https://edu.e-cbar.az/'
    },
    {
      id:7,
      image:"data:image/jpeg;base64,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",
      link:'https://infobank.az/'
    },
    {
      id:8,
      image:"https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F93%2FKlrQmyh6u5Z04Jx1LNC0pw4RtQClkJ-metaQXJ0Ym9hcmQgMSBjb3B5IDIuanBn-.jpg&w=256&q=75",
      link:'https://bizimpullar.az/'
    },
  ]
  const titleImage = [
    {
      id:1,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F220%2FykRFF7ZpiUhgj4qArvdx7JlBE5figO-metaRkJfSU1HXzE3MDc1NTEzNjA5OTkuanBn-.webp&w=1080&q=75',
      content:'Tələbələrin Mediasiya Şurasında tədris-istehsalat təcrübələri başa çatıb.'
    },
    {
      id:2,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F219%2FBdn8ZtrRxFfv1olPOsJwds79OM2kWn-metaMTIyZTYwYWYtY2NiZS00MjdhLThjMmUtN2FkM2FiMDgzYWRhICgxKS5qcGc%3D-.webp&w=1920&q=75',
      content:'Nadir Adilov: “2023-cü uğurlu nəticəmiz 51.4% olmuşdur - HESABAT.”'
    },
    {
      id:3,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F217%2FOX16aaLf5aDbtsXShRBYPbnh6xOn3v-metaMTY4ODUzNDgzOV8zNTc3ODE2MTNfNTcyMjY3NzU1MTExNTg3XzYzODU3ODU3NjU1ODAwODE5MjdfbiAoMikuanBn-.webp&w=1920&q=75',
      content:'Bərdə 1 saylı Mediasiya Təşkilatı Mediasiya Şurası üzvlüyünə qəbul edildi.'
      
    },
    {
      id:4,
      image:'https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F218%2FKuCmxbvC4CEIEwKPxPDS8NKS2ZLJC8-metaOWIxYjZlMzRmYTJhYjZjMmNiOWI3NTYzNzdmOTg1NWMuanBn-.webp&w=1920&q=75',
      content:'Mediasiya haqqında Azərbaycan Respublikasının Qanunu”nun təbliği ilə '
    },
    
  ]



  const startIndex = (page-1)*ItemsPerPage
  const endIndex = startIndex + ItemsPerPage
  const ItemsShow = data.slice(startIndex,endIndex)

  const handleChange = (event:any,value:any) => {
    setPage(value);
  };

  return (
    <Container maxWidth='xl'>

      <Box>
        <Grid container spacing={2} sx={{marginTop:4}}>
          
          <Grid item xs={12} sm={12} md={6} lg={6} sx={{width:'50%'}}>
              <Card sx={{height:'536', width: '100%' }}>
                  <CardCover sx={{ position: 'relative' }}>
                        <img src='https://mediasiya.tv/_next/image?url=https%3A%2F%2Fpanel.mediasiya.tv%2Fstorage%2F215%2FJaqCemmrj9S9XG8lGU0gyU2NiFTrKE-metaRkJfSU1HXzE3MDcwNTU3MDgxOTEuanBn-.webp&w=1920&q=75' alt="" />
                        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)', height: '100%', boxSizing: 'border-box' }}>
                        </Box>
                        <CardContent sx={{position:'absolute',bottom:0,left:0,width:'100%',boxSizing:'border-box',padding:'23px'}}>
                    <Button sx={{bgcolor:'blue' ,color:'white'}}>Son xeberler</Button>
                    <Typography sx={{color:'white',marginTop:2,fontSize:20}}>Türk Dünyası Mediatorlar Birliyinin rəhbərliyi Bakı 15 saylı mediasiya toplantisi ...</Typography>
                   <CardActions >
                   <IconButton sx={{fontSize:16,color:'white'}}>
                      <AccessTimeIcon sx={{width:20,marginRight:1}}/>14 saat evvel
                      </IconButton>
                      <IconButton sx={{fontSize:16,color:'white'}}>
                      <RemoveRedEyeIcon sx={{width:20,marginRight:1}}/>5
                      </IconButton>
                   </CardActions>
                  </CardContent>
                  </CardCover>
              </Card>
          </Grid>
          <Grid container spacing={2} item xs={12} sm={12} md={6} lg={6} sx={{width:'50%'}}>
              {titleImage.map((item)=>(
            <Grid item xs={12} sm={6} md={6} lg={6}  key={item.id}>

            <Card sx={{height: '500', width: '100%' }}>
                  <CardCover sx={{ position: 'relative' }}>
                        <img src={item.image} alt="" />
                        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)', height: '100%', boxSizing: 'border-box' }}>
                        </Box>
                        <CardContent sx={{position:'absolute',bottom:0,left:0,width:'100%',boxSizing:'border-box',padding:'23px'}}>
                    <Button sx={{bgcolor:'blue' ,color:'white'}}>Son xeberler</Button>
                    <Typography sx={{color:'white',marginTop:2,fontSize:15}}>{item.content}</Typography>
                   
                  </CardContent>
                  </CardCover>
              </Card>
            </Grid>
              ))}

          </Grid>
      
        </Grid>
      </Box>

      <Box >
      <Grid container spacing={2} sx={{marginTop:0}}>
        {ItemsShow.map((item)=>(
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
        <Card sx={{marginTop:'40px'}} className='h-[100%]'>
        <CardMedia
        sx={{height:240}}
        component="img"
        alt='newsImage'
        image={item.image}
        />
        <CardContent>
          <Typography variant='h6' sx={{bgcolor:"blue",color:"white",width:130,borderRadius:2,textAlign:'center'}}>Son xeberler</Typography>
          <Link to={`/home/${item.id}`}>
          <Typography variant='h6'>{item.content}</Typography>
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
        ))}
      
      </Grid>
      </Box>
   
      <Box sx={{marginTop:10}}>
      <Pagination
      count={Math.ceil(data.length)}
      page={page}
      onChange={handleChange}
      shape='circular'
      sx={{mt:4,display:'flex',justifyContent:'center'}}
      color="primary"
      />
      
      </Box>
      
        <Box sx={{marginTop:10}}>
          <Typography variant='h6'>Faydalı Keçidlər.</Typography>
        </Box>
      <Box>
      <Grid container spacing={2} sx={{marginTop:0}}>
        {images.map((itemImage)=>(

        <Grid item xs={12} sm={6} md={4} lg={3} key={itemImage.id}>
         
            <Link to={itemImage.link} key={itemImage.id}>
          <img className=' sm:w-full sm:h-[11rem] w-[13rem] h-[5rem] hover:scale-110 transition-transform duration-500 ease-in-out' src={itemImage.image} alt="" />
            </Link>
         
        </Grid>
        ))}
       
      </Grid>
      </Box>
    </Container>
    
    
  )
}
