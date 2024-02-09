import React, { useState } from 'react'
import{Box,Stack,Typography,Toolbar,IconButton,Menu,Container,Avatar,Button,Tooltip,MenuItem, AppBar,Drawer,TextField,Accordion,AccordionSummary,AccordionDetails}from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Clear from '@mui/icons-material/Clear';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoOne from '../assert/img_65.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pages = ['Siyasət','İqtisadiyyat','Cəmiyyət','Mədəniyyət','Haqqımızda','Əlaqə'];
const details = ['Aile Mubahiseleri uzre mediasiya','Mediasiya yenilikleri','Mediasiya surasinin yenilikleri','Emek mubahiseleri uzre mediasiya','Kommersiya mubahiseleri uzre mediasiya','Istehlak mubahiseleri uzre mediasiya','Mediasiya teskilatlarinin fealiyyeti','Mediasiya bulletini']
export const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState(false)
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [mediasiya, setMediasiya] = useState(false)

    const handleOpenNavMenu = () =>{
        setAnchorElNav((prevState)=>!prevState)
    }
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(false)
    }
    const handleOpenUserMenu = (event:React.MouseEvent<HTMLElement>) =>{
        setAnchorElUser(event.currentTarget)
    }
    
  return (
    <AppBar position="static" sx={{bgcolor:'blue',height:90}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 14,
              display: { xs: 'none', lg: 'flex' },
              fontFamily: 'monospace',
              fontSize:30,
              fontWeight:700,
              letterSpacing: '.2rem',
              color: 'orangered',
              textDecoration: 'none',
            }}
          >
            <img src={LogoOne} alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id="menu-appbar"
              keepMounted
              variant='temporary'
              open={anchorElNav}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box',width:470 }
              }}
              >
              <h1 className='pb-3 pl-3 text-lg'>Naviqasiya</h1>
              <Button sx={{
              position:'absolute',
              display:'inline',
              top:2,
              right:10,
              '@media(max-width: 446px)': {
              top:2,
              right: 109,},
              
              }} onClick={()=>setAnchorElNav(false)}>
              <Clear/>
              </Button>
              <Accordion>
                <AccordionSummary
                   expandIcon={<ChevronRightIcon />}
                 >
            <Typography textAlign="center" sx={{ fontSize: 17, color: 'grey' }}>Medasiya</Typography>
          </AccordionSummary>
          <AccordionDetails>
           
            <Typography component={Link} to="/aile-mubahisesi">
              - Ailə mübahisələri üzrə mediasiya
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
           
            <Typography component={Link} to="/mediasiya-yenilikler">
              - Mediasiya yenilikləri
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
           
            <Typography component={Link} to="/sura-faliyyeti">
              - Mediasiya Şurasının fəaliyyəti
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
           
            <Typography component={Link} to="/emek-mubahiseleri">
              - Əmək mübahisələri üzrə mediasiya
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
           
            <Typography component={Link} to="/kommersiya-mubahisesi">
              - Kommersiya mübahisələri üzrə mediasiya
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
           
            <Typography component={Link} to="/istehlak-mubahisesi">
              - İstehlak mubahisələri üzrə mediasiya
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
           
            <Typography component={Link} to="/teskilat-faliyyeti">
              - Mediasiya təşkilatlarının fəaliyyəti
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
           
            <Typography component={Link} to="/mediasiya-bulletini">
              - Mediasiya bülletini
            </Typography>
          </AccordionDetails>
            </Accordion>
              {pages.map((page,index) => (
                <>
                <MenuItem key={index} onClick={handleCloseNavMenu} sx={{color:'grey'}}>
                  <Typography textAlign="center"sx={{fontSize:17}} component={Link} to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}>{page}</Typography>
                  <ChevronRightIcon sx={{position:'absolute',right:20}}/>
                </MenuItem>
                </>
              ))}
            </Drawer>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to='/'
            sx={{
              
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontSize:30,
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'orangered',
              textDecoration: 'none',
            }}
          >
           <img src={LogoOne} alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Tooltip title="Open settings">
            <Button  
            onMouseEnter={()=>setMediasiya(true)} 
           
            sx={{color:'white',cursor:'pointer'}} >
                Mediasiya
                {/* onClick={()=>setMediasiya(true)} */}
                <KeyboardArrowDownIcon/>
            </Button>
          </Tooltip>
          <Menu
          sx={{mt:'75px',ml:"260px"}}
          id='menu-appbar'
          
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          open={mediasiya}
          onClose={()=>setMediasiya(false)}
          onMouseEnter={()=>setMediasiya(true)}
          
          
         
          >
            {details.map((detail,index)=>(
                <MenuItem key={index} onClick={()=>setMediasiya(false)}>
                    <Typography textAlign="center">{detail}</Typography>
                    
                </MenuItem>
            ))}
          </Menu>
            
            {pages.map((page,index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 3, color: 'white', display: 'block',mr:3,fontWeight:500,fontSize:15,fontFamily:'inherit' }}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <>
              <IconButton onClick={()=>setIsOpen(true)} sx={{ p: 0,marginRight:2 }}>
                <Search sx={{color:"white",fontSize:30}}/>
                
              </IconButton>
              <Drawer open={isOpen} anchor='top' onClose={()=>setIsOpen(false)} sx={{height:100}}>
                <Box sx={{height:100}}>

                <TextField id="outlined-basic" label='Axtarış' sx={{position:'absolute',top:22,left:130,width:400}} />
                <Search sx={{position:'absolute',left:490,top:40,fontSize:28,color:'pink'}}/>
                </Box>
              </Drawer>
              <Link to="/login">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,marginRight:2 }} >
                <AddIcon sx={{color:'white',fontSize:30}}/>
              </IconButton>
              </Link>
                </>
            </Tooltip>
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
