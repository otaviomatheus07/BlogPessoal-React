import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalPostagem from "../../components/postagens/modalPostagens/ModalPostagens";
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import { TokenState } from "../../store/tokens/tokenReducer";
import './Home.css';

function Home() {
    let navigate = useNavigate();
      const token = useSelector<TokenState, TokenState['token']>(
      (state)=>state.token
    );
  
    useEffect(() => {
      if (token == "") {
        toast.error("Você precisa estar logado",
        {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
          navigate("/login")
      }
  }, [token])
  
    return (
      <>
        <Grid container className="banner" direction="row" justifyContent="center" alignItems="center">
          <Grid alignItems="center" item xs={6}>
            <Box paddingX={20}>
              <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="h1">Seja bem vindo(a)!</Typography>
              <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="h3">expresse aqui os seus pensamentos e opiniões!</Typography>
            </Box>  
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
                <ModalPostagem />
              </Box>
              <Link to='/postagens' className="text-decorator-none">
              <Button className="botao2" variant="outlined"> Ver Postagens</Button>
              </Link>
            </Box>
          </Grid>
  
          <Grid item xs={6}>
          <img className="img"
            src="https://github.com/otaviomatheus07.png"
            alt=""
            width="500px"
            height="500px"
          />            
          </Grid>
  
          <Grid xs={12} className='postagens'></Grid>
          <TabPostagem />
        </Grid>
      </>
    );
  }
    
    export default Home;
    
                    