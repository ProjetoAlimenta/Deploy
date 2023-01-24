import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabPostagem.css';
import TimelinePostagem from '../timelinePostagem/TimelinePostagem';
import Contatos from '../../contatos/Contatos';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='appbar'>
          <Tabs centered className='tab' onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <TimelinePostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Contatos />
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;