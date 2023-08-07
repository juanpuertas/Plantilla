import { Box, Container, Typography,Button, Paper } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Product = () => {
    
    const Img= styled("img")({
        width:200,
        height:"100%",
        objectFit:"cover",
        objectPosition:"center"
        
    })
  
    return (
    <div>
      <Paper 
        sx={
            {
                display:"flex",
                alignItems:'center',
                gap:2,
                overflow:'hidden',
                
                mt:5,
            }
        }
      >
        <Img
            src="https://via.placeholder.com/200"
            alt='Imagen de un pc'
        />
        <Box sx={
            {
                flexGrow:1,
                display:"grid",
                gap:2
            }
        }>
            <Typography variant='h5'>Producto</Typography>
            <p>Description of product</p>
            <Button variant="contained" color='success'>Add to cart</Button>
        </Box>
        <Box
            component="p"
            sx={{mr:2}}
        >
        Bs20.5
        </Box>
      </Paper>
    </div>
  )
}

export default Product
