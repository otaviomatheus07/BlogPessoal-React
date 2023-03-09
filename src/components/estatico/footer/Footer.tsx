import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import './Footer.css';
import { GitHub } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokenReducer";


function Footer(){
    const token = useSelector<TokenState, TokenState['token']>(
        (state)=>state.token
      );

      var footerComponent;
      
      if(token != ""){
        footerComponent = <Grid container  direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className='box1'>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className='textos'>Segue "nois" ae </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/otaviomatheus07" target="_blank">
                        <GitHub className='redes'/>
                    </a>
                    <a href="https://www.linkedin.com/in/otavio-matheus-adm/" target="_blank">
                        <LinkedInIcon className='redes'/>
                    </a>
                </Box>
            </Box>
            <Box className='box2' >
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2023 Feito com Amor e Carinho</Typography>
                </Box>
            </Box>
        </Grid>
    </Grid> 

      }

    return (
        <>
       {footerComponent}
        </>
    )
}
export default Footer;