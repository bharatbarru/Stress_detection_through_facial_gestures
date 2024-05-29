import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Detectface() {
  const videoRef = useRef(null);
  const mediaStreamRef = useRef(null);

  useEffect(() => {
    const constraints = {
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          mediaStreamRef.current = stream;
        }
      })
      .catch((error) => {
        console.error('Error accessing the webcam:', error);
      });

    return () => {
      // Clean up the stream when the component unmounts
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (<>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <h1>Webcam Page</h1>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: '500px' }} />
      <Link to="/" style={{ textDecoration: 'none' }}>
     <Button variant="contained" color="primary">
       Back
     </Button>
   </Link>
    </div>
    
   </>);
}

export default Detectface;
