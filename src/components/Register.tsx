import React from 'react'
import { Link } from 'react-router-dom'
import { TextField,Checkbox,FormControlLabel,FormGroup,Button,Box,FormControl,InputAdornment,InputLabel,OutlinedInput,IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LogoOne from '../assert/img_65.png'
export const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  return (
    <div className='bg-black py-28 sm:w-full'>
    <div className='w-[32rem] h-[54rem] bg-gray-900 rounded-lg m-auto sm:w-full '>
        <div className='text-center space-y-4 py-10 sm:m-auto'>

        {/* <h2 className='text-white font-extrabold text-2xl font-mono '>Moviak.com</h2> */}
        <img className='m-auto' src={LogoOne} alt="" />
        <h1 className='text-white font-[700] text-2xl'>Qeydiyyatdan keçin</h1>
        <div className='flex flex-row space-x-1 justify-center'>

        <p className='text-gray-300 font-light'>və ya </p>
        <Link to='/login'><p className='text-blue-500'>hesabınıza daxil olun</p></Link>
        </div>
        
        </div>
        <div className='flex flex-col space-y-20'>
         
        <TextField id="filled-basic" label="Ad" focused sx={{width:'100%',margin:'auto','& input':{color:'white'},maxWidth:'390px'}} />
        <TextField id="filled-basic" label="E-poct unvani" focused sx={{width:'100%',margin:'auto','& input':{color:'white'},maxWidth:'390px'}} />
 
        <FormControl sx={{ m: 1,margin:'auto',width:'100%',maxWidth:'390px' }} focused variant="outlined" >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                sx={{color:'white'}}
                endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{color:'white'}}
             >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
            }
            label="Password"
            />
            
            </FormControl>
            <FormControl sx={{ m: 1,margin:'auto',width:'100%',maxWidth:'390px' }} focused variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Parol tesdiqi</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                sx={{color:'white'}}
                endAdornment={
            <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{color:'white'}}
             >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            </InputAdornment>
            }
            label="Password"
            />
            
            </FormControl>
            <Button variant='contained' color='primary' sx={{width:'100%',margin:'auto',maxWidth:'410px'}}>Daxil Olun</Button>
              
        </div>

    </div>
</div>
  )
}
