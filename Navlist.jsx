import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import InboxIcon from "@mui/icons-material/Inbox"


const Navlist = () => {
  return (
    <div>
        <Box sx={
            {
                width:250,
                bgcolor:"#ff9800"

            }
        }>
            <nav>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Inbox"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Drafts"/>
                    </ListItem>
                </List>
            </nav>    
                <Divider/>
                    <nav>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton 
                                    component="a"
                                    href="#spam"
                                >
                                    <ListItemText>Spam</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
                    <nav>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton 
                                    component="a"
                                    href="#spam"
                                >
                                    <ListItemText>Trash</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </nav>
        </Box>
    </div>
  )
}

export default Navlist
