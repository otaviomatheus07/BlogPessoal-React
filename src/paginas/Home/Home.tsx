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
                <Grid xs={6}>
                    <p><img className="img" src="https://i.imgur.com/H88yIo2.png" alt="Imagem tela Inicial"  /></p>
                </Grid>
            </Grid>
        </div>
        )
    }
    
    export default Home;
    