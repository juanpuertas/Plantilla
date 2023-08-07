import React, { useState } from 'react'
import Navlist from './Navlist'
import { AppBar, Button, Drawer, Toolbar, Typography } from '@mui/material'
const Navbar = () => {
  
  const [open,setOpen]=useState(false)
  
    return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='' sx={
                    {
                        flexGrow:1
                    }
                }></Typography>
                <Button variant='' 
                >Colegio</Button>
                <Button variant='' color='red'>Plataforma Educativa SAE</Button>
                <Button variant=''>Publicaciones</Button>
                <Button variant='' 
                        onClick={()=> {setOpen(true)}}>Contactanos</Button>
            
                <Drawer
                    open={open}
                    anchor="left"
                    onClose={()=> setOpen(false)}
                >
                    <Navlist/>
                </Drawer>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
