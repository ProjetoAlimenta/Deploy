import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


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
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Box>
            <Box className='display1'>
              <div className="property-card">
                <a href="#">
                  <div className="property-imageSergio">
                    <div className="property-image-title">
                    </div>
                  </div>
                </a>
                <div className="property-description">
                  <h5>Sérgio Luiz</h5>
                  <p> 21 Anos Estudante de Análise e Desenvolvimento de Sistemas | Desenvolvedor Web Fullstack Jr | Javascript | Java | Python | Typescript | NodeJs | NestJs | MySQL | HTML | CSS | ReactJs |</p>
                </div>
                <a href="https://www.linkedin.com/in/sergiolneves/" target="_blank">
                  <div>
                    <img className="property-social-iconsLinkedin" alt="Linkedin"
                      src="https://cdn-icons-png.flaticon.com/512/49/49656.png"></img>
                  </div>
                </a>
                <a href="https://github.com/SergioLNeves" target="_blank">
                  <div>
                    <img className="property-social-iconsGithub" src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                      alt="Github"></img>
                  </div>
                </a>
              </div>
              <div className="property-card">
                <a href="#">
                  <div className="property-imageMarcos">
                    <div className="property-image-title">
                    </div>
                  </div>
                </a>
                <div className="property-description">
                  <h5>Marcos Morais</h5>
                  <p> 19 Anos | Desenvolvedor Web Fullstack Jr | Técnico em T.I | Javascript | Typescript | NodeJs | NestJs | MySQL | HTML | CSS | ReactJs | Português | English | Español</p>
                </div>
                <a href="https://www.linkedin.com/in/marcos-morais79/" target="_blank">
                  <div>
                    <img className="property-social-iconsLinkedin"
                      src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="Linkedin"></img>
                  </div>
                </a>
                <a href="https://github.com/Marcos-sxt" target="_blank">
                  <div>
                    <img className="property-social-iconsGithub" src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                      alt="Github"></img>
                  </div>
                </a>
              </div>
            </Box>
            <Box className='display2'>
              <div className="property-card">
                <a href="#">
                  <div className="property-imageJanderson">
                    <div className="property-image-title">
                    </div>
                  </div>
                </a>
                <div className="property-description">
                  <h5>Janderson Pires</h5>
                  <p>26 anos. Estou es transição de carreira, sou Desenvolvedor Web e tenho conhecimento em linguagem JavaScript e TypeScript  e para o banco de dados o MySQl.
                  </p>
                </div>
                <a href="https://www.linkedin.com/in/janderson-pires-44184b243/" target="_blank">
                  <div>
                    <img className="property-social-iconsLinkedin"
                      src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="Linkedin"></img>
                  </div>
                </a>
                <a href="https://github.com/janeo20" target="_blank">
                  <div>
                    <img className="property-social-iconsGithub" src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                      alt="Github"></img>
                  </div>
                </a>
              </div>
              <div className="property-card">
                <a href="#">
                  <div className="property-imageRaphael">
                    <div className="property-image-title">
                    </div>
                  </div>
                </a>
                <div className="property-description">
                  <h5>Raphael Pinto</h5>
                  <p> 25 Anos | Desenvolvedor Web Fullstack Jr | Javascript | Typescript | NodeJs | NestJs | MySQL | HTML | CSS | ReactJs</p>
                </div>
                <a href="https://www.linkedin.com/in/raphael-pinto-327882250/"
                  target="_blank">
                  <div>
                    <img className="property-social-iconsLinkedin"
                      src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="Linkedin"></img>
                  </div>
                </a>
                <a href="https://github.com/janeo20" target="_blank">
                  <div>
                    <img className="property-social-iconsGithub" src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                      alt="Github"></img>
                  </div>
                </a>
              </div>
              <div className="property-card">
                <a href="#">
                  <div className="property-imageFelipe">
                    <div className="property-image-title">
                    </div>
                  </div>
                </a>
                <div className="property-description">
                  <h5>Felipe Costa</h5>
                  <p> 29 Anos |Bacharel em Ciências da Aeronáuticas| Desenvolvedor Web Fullstack Jr | Javascript | Typescript | NodeJs | NestJs | MySQL | HTML | CSS | ReactJs</p>
                </div>
                <a href="https://www.linkedin.com/in/felipe-costa-931aa31b3/" target="_blank">
                  <div>
                    <img className="property-social-iconsLinkedin"
                      src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="Linkedin"></img>
                  </div>
                </a>
                <a href="https://github.com/felipecveiga" target="_blank">
                  <div>
                    <img className="property-social-iconsGithub" src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                      alt="Github"></img>
                  </div>
                </a>
              </div>
            </Box>
            <Box className='display3'>
              <div className="property-card">
                <a href="#">
                  <div className="property-imageSilas">
                    <div className="property-image-title">
                    </div>
                  </div>
                </a>
                <div className="property-description">
                  <h5>Silas Tavares </h5>
                  <p>22 anos entusiasta da tecnologia em geral, tenho conhecimento em JavaScript, TypeScript, HTML, CSS, mysql, futuramente pretendo cursar ADS</p>
                </div>
                <a href="https://www.linkedin.com/in/silas-tavares-062228244/" target="_blank">
                  <div>
                    <img className="property-social-iconsLinkedin"
                      src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="Linkedin"></img>
                  </div>
                </a>
                <a href="https://github.com/tavaressilas10" target="_blank">
                  <div>
                    <img className="property-social-iconsGithub" src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                      alt="Github"></img>
                  </div>
                </a>
              </div>
              <div className="property-card">
                <a href="#">
                  <div className="property-imageWallace">
                    <div className="property-image-title">
                    </div>
                  </div>
                </a>
                <div className="property-description">
                  <h5>Wallace </h5>
                  <p> 22 Anos | Desenvolvedor Web Fullstack Jr | Javascript | Typescript | NodeJs | NestJs | MySQL | HTML | CSS | ReactJs</p>
                </div>
                <a href="https://www.linkedin.com/in/wallace-santos-9a07a825a/" target="_blank">
                  <div>
                    <img className="property-social-iconsLinkedin"
                      src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="Linkedin"></img>
                  </div>
                </a>
                <a href="https://github.com/Waallaacee" target="_blank">
                  <div>
                    <img className="property-social-iconsGithub" src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
                      alt="Github"></img>
                  </div>
                </a>
              </div>
            </Box>
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;