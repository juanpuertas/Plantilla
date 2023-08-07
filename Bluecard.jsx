import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'


const Bluecard = () => {
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
                display:"block",
                alignItems:'center',
                mt:5,
                width:400,
                
                overflow:'hidden',
                mr:50,
                
            }
        }
      >
        <center>
            <Img
                src="https://via.placeholder.com/200"
                alt='Imagen de un pc'
                className='img'
                
            />
        </center>
        <Box sx={
            {
                flexGrow:1,
                display:"grid",
                gap:2
            }
        }>
            <Typography variant='h5' sx={
                {
                    marginTop:10,
                    justifyContent:'center',
                    display:'flex'
                }
            }>E.U Colegio Anibal Rodríguez</Typography>
            <Typography variant='' sx={
                {
                    marginTop:10,
                    justifyContent:'center',
                    display:'flex',
                }
            }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quod maxime debitis unde, necessitatibus vero veritatis tempora minima cupiditate aspernatur voluptas voluptatem accusantium possimus. Temporibus vero adipisci doloribus reiciendis tempore!</Typography>
            <Button variant="contained" color='success'>Solicito Cupo</Button>
        </Box>
        
      </Paper>
         
    </div>
  )
}

export default Bluecard
