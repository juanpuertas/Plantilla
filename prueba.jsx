import React from 'react'

const prueba = () => {
  return (
    <div>
      <Container maxWidth="xl"
            sx={
              {
                alignContent:"rigth",
                display:"flex",
                gap:1,
                overflow:"hidden",
                marginLeft:35,
                

              }
            }
          >
            
            <Button variant='contained'>Colegio</Button>
            <Button variant='contained'>Plataforma Educativa SAE</Button>
            <Button variant='contained'>Publicaciones</Button>
            <Button variant='contained'>Contactanos</Button>
            
          </Container>

          <Product/>
          <Bluecard/>
    </div>
  )
}

export default prueba

       