import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import './Home.css';

function Home(){
    return (
        <div className="banner">
            <Grid container alignItems="center">
                <Grid xs={6}>
                   <h1 className="h1">Bem Vindo ao meu Blog Pessoal</h1>
                   <h3 className="h3">Diga ai mano e mana !</h3>
                   <div className="botaoEnd">
                   <Button className="botao1" variant="outlined">Ver Postagem </Button>
                   <Button className="botao2" variant="contained">Criar Postagem</Button>
                   </div>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://github.com/otaviomatheus07.png" alt="" width="200px" height="200px"/>
                </Grid>
            </Grid>
        </div>
        )
    }
    
    export default Home;
    