import React from 'react'
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


function Login() {

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid xs={7} alignItems="center">
                <Box paddingX={20}>
                    <form>
                        <Typography
                            variant="h3"
                            gutterBottom
                            color="textPrimary"
                            component="h3"
                            align="center"
                            className="entrar"
                        >
                            Entrar
                        </Typography>
                        <TextField
                            id="usuario"
                            label="usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="senha"
                            label="senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth
                        />
                        <Box marginTop={2} textAlign="center">
                            <Link to="/home" className="text-decorator-none">
                                <Button className='botao1' type="submit" variant="contained" color="primary">
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align="center">Ainda não é cadastrado?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align="center" className="txts"> Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='img'>
            </Grid>
        </Grid>
    )
}

export default Login