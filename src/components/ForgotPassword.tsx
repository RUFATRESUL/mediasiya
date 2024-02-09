import React from 'react'
import LogoOne from '../assert/img_65.png'
import { Link } from 'react-router-dom'
import { TextField,Checkbox,FormControlLabel,FormGroup,Button,Box,FormControl,InputAdornment,InputLabel,OutlinedInput,IconButton,Typography,FormLabel } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export const ForgotPassword = () => {
  return (
    <div className='bg-black py-28 sm:w-full'>
    <div className='w-[36rem] h-[30rem] bg-gray-900 rounded-lg m-auto sm:w-full'>
        <div className='text-center space-y-4 py-10'>
        <img className='m-auto' src={LogoOne} alt="" />
        <h1 className='text-white font-[700] text-2xl'>Şifrənizi unutmusunuz?</h1>
        <div className='flex flex-row space-x-1 justify-center'>
        <Link to='/login'><p className='text-blue-500'><ArrowBackIcon/> girişə qayıt</p></Link>
        </div>
        </div>
        <div className='flex flex-col space-y-20'>
        <TextField id="filled-basic" label="E-poçt ünvanı*" required sx={{width:'100%',margin:'auto',maxWidth:'390px'}} focused className='sm:w-full' />
        <Button variant='contained' color='primary' sx={{width:'100%',margin:'auto',maxWidth:'410px'}} className='sm:w-full'>E-poct gonder</Button>
        </div>
    </div>
    </div>
  )
}
