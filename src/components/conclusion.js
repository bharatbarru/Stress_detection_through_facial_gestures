import { Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Conclusion() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 2 }}>
    <Card sx={{ maxWidth: 600, padding: 4, boxShadow: 3 }}>
      <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: 2, fontWeight: 'bold' }}>
        Conclusion
      </Typography>
      <CardContent>
        <Toolbar />
        <Typography variant="body1" component="div" sx={{ textAlign: 'center', marginBottom: 3 }}>
        In coclusion, our project introduces a new way to detect stress using facial expressions. Instead of invasive methods like wearing devices, we use technology to analyze how your face looks when you're stressed. This makes it easier for people to manage their stress without extra equipment. While other methods have drawbacks, our approach aims to be user-friendly and helpful in real-time. With more work, we hope our system can be a useful tool for people everywhere to improve their mental well-being.
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

export default Conclusion
