import { Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Abstract() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 2 }}>
    <Card sx={{ maxWidth: 600, padding: 4, boxShadow: 3 }}>
      <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 'bold' }}>
        Abstract
      </Typography>
      <CardContent>
        <Toolbar />
        <Typography variant="body1" component="div" sx={{ textAlign: 'center', marginBottom: 3 }}>
          Our system has a cutting-edge stress detection system using facial expression analysis. It recognizes three levels of stress: mild, moderate, and severe, and offers tailored advice accordingly. Initial tests show promising results, providing a convenient way for individuals to manage stress by themselves. We also aim to improve the system by showing the accuracy of the stress detection and providing personalized messages to become a helpful companion in stress management.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  </Box>  )
}

export default Abstract
