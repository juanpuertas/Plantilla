import React from 'react'
import { Button,Container,Box, Typography, Hidden } from '@mui/material'
import Product from './Product'
import Bluecard from './Bluecard'
import Navbar from './NavBar/Navbar'

const Header = () => {
  return (
    <div>
        <Navbar/>
        <Bluecard/>
    </div>
  )
}

export default Header
