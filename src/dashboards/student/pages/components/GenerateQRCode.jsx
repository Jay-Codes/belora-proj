import React from 'react'
import Title from './Title'
import { Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel,Typography } from '@mui/material';
import  QRCode  from 'qrcode';

  


const handleSubmit = (event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
}

const generateQRCode = async (id) => {
  try{
    const response = await QRCode.toDataURL(id)
    console.log(response)
    var link = document.createElement('a');
    link.href = response;
    link.download = id+'_QR.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  catch (error){
    console.log(error)
  }
}
const LoginDetails = ({ID}) => {
  return (
    <div>
        <Container component="main" >
            <CssBaseline />
            <Title>Generate QR Code</Title>
                    <Button
                      // type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick ={()=>{generateQRCode('SCHUJO2111')}}
                    >
                    Get Your QR CODE
                    </Button>
                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                      Generate Code when you have never genrated a QR CODE before
                    </Typography>
            {/* <Grid  container component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} spacing={1}>
                
                <Grid item xs={12} md={8} lg={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                    Get Your QR CODE
                    </Button>
                </Grid>
            </Grid> */}
          </Container>
    </div>
  )
}

export default LoginDetails