import React from 'react'
import { useRef, useState, useEffect } from 'react';
import Title from './Title'
import { Container, CssBaseline, Grid, Link, Checkbox, Button, Box,TextField, FormControlLabel,Typography } from '@mui/material';
// import {QrReader} from 'react-qr-reader'
import QrReader from 'modern-react-qr-reader'
// import Q


function QR ({isRecording,setScanResultFile,scanResultFile}){
  const [hidden,setHidden] = useState(false)
  const [stream, setStream ] = useState()
  const [track,setTrack ] = useState()
  const ref = useRef()
  
  useEffect(()=>{
    (
      async function doInit(){
        const str = await navigator.mediaDevices.getUserMedia({
                  // audio: false,
                  video: true,
      })
       setStream(str)
       setTrack(str.getTracks()[0])
      }
    )();
    return ()=>{
      if(stream)
      stream.getTracks().forEach(track => {track.enabled=false;track.stop();track.enabled=false;})
    }
  },[])
  useEffect(()=>{
    if(!isRecording)
      {
        setHidden(true)
        track.stop()
        // ref.current.stopCamera()
        // console.log(track)
      }
      else{
        setHidden(false)
      }
  },[isRecording])
  const handleScan = (result,error)=>{
    
    if (result){
      console.log(result)
      setScanResultFile(result)
    }
    if(error){
      // console.log(error)
    }
  }
  return (
      <>
        { 
          <>
            {/* <QrReader
            delay ={1000}
            onResult= {handleScan}
            ref ={ref}
            /> */}
            {
              !hidden && 
              <QrReader
                delay={300}
                facingMode={"environment"}
                onError={(e)=>console.log(e)}
                onScan={handleScan}
                style={{ width: '100%' }}
                ref = {ref}
              />
            }
            {scanResultFile && <h3>Scanned ID :{scanResultFile.text}</h3>}
          </>
        }
      </>
    )
}
const LoginDetails = () => {
  const [scanResultFile, setScanResultFile] = useState()
  const [isRecording , setIsRecording ] = useState(true)
//   useEffect(() =>{
//     ( async function doThis ()
//   {
//     const str = await navigator.mediaDevices.getUserMedia({
//         // audio: false,
//         video: true,
//     })
//     str.getTracks().forEach(track => {track.enabled=false;;track.stop();track.enabled = false;console.log(track)})
//     console.log(str)
//     console.log('done')
//   }
// )();
//   },[])
  return (
    <div>
        <Container component="main" >
            <CssBaseline />
            <Title>Scan QR Code</Title>
            <Grid  container  sx={{ mt: 1 }} spacing={1}>

                <Grid item xs={12} md={8} lg={12}>
                    <Button 
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick = {()=>{setIsRecording(!isRecording)}}
                    >
                      {isRecording ? "Stop Scanning QR Code" : "Scan QR code"}
                    </Button>
                    <Typography color="text.secondary" id = 'qr' sx={{ flex: 1 }}>
                      point camera at student's QR to Do attendance
                    </Typography>
                    <QR isRecording={isRecording} setScanResultFile={setScanResultFile} scanResultFile={scanResultFile}/>
                </Grid>
            </Grid>
          </Container>
    </div>
  )
}

export default LoginDetails