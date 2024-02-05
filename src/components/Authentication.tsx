import React from 'react'
import { Link } from 'react-router-dom'
import { TextField,Checkbox,FormControlLabel,FormGroup,Button,Box,FormControl,InputAdornment,InputLabel,OutlinedInput,IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LogoOne from '../assert/img_65.png'
// import Link from 'react-router-dom'

export const Authentication = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className='bg-black py-28 sm:w-full'>
        <div className='w-[32rem] h-[44rem] bg-gray-900 rounded-lg m-auto sm:w-full'>
            <div className='text-center space-y-4 py-10'>
            <img className='m-auto' src={LogoOne} alt="" />
            <h1 className='text-white font-[700] text-2xl'>Daxil olun</h1>
            <div className='flex flex-row space-x-1 justify-center'>
            <p className='text-gray-300 font-light'>və ya </p>
            <Link to='/register'><p className='text-blue-500'>qeydiyyatdan kecin</p></Link>
            </div>
            </div>
            <div className='flex flex-col space-y-20'>
            <TextField id="filled-basic" label="E-poct/Username" focused sx={{width:390,margin:'auto','& input':{color:'white'}}} />
            <FormControl sx={{ m: 1,margin:'auto' }} focused variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            sx={{color:'white',width:390}}
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
            <FormGroup>
                <FormControlLabel value="end" labelPlacement='end' required control={ <Checkbox sx={{color:'white',marginLeft:8}} />} label="Yadda Saxla"sx={{color:'white'}}/>
            </FormGroup>
            <Button variant='contained' color='primary' sx={{width:410,margin:'auto'}}>Daxil Olun</Button>
                  
            </div>

        </div>
    </div>
  )
}
