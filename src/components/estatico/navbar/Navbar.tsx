import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import {Drawer, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: 200,
  },
}));

const MyAppBar = () => {
  const token = useSelector<TokenState, TokenState['token']>(
    (state)=>state.token
  )
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout(){
    dispatch(addToken(''));
    toast.error("Usuário deslogado",
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
    navigate('/login')
}

let navbarComponent = null;

if(token !== ''){
  navbarComponent = (
  <AppBar className='barra'  position="static">
      <Toolbar>
        <IconButton id='corMenu'
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography id="plan"  variant="h4" className={classes.title}>
        <Link id='plan' to="/home" className="text-decorator-none1">
          Blog do Otavio
          </Link>
        </Typography>
        <Typography id="plan"  variant="h4" className={classes.title}>
        Pense e Compartilhe
        </Typography>
        
      </Toolbar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        className={classes.drawer}
      >
        <List className='lista' >
          <ListItem  button onClick={toggleDrawer}>
          <Link to="/home" className="text-decorator-none1">
            <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem  button onClick={toggleDrawer}>
          <Link to="/Postagens" className="text-decorator-none1">
            <ListItemText primary="Postagens" />
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
          <Link to="/Temas" className="text-decorator-none1">
            <ListItemText primary="Temas" />
            </Link>
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
          <Link to='/formularioTema' className="text-decorator-none1">
            <ListItemText primary="Cadastrar Tema" />
            </Link>
          </ListItem>
          <ListItem className="sair" onClick={goLogout}>
            <Typography  variant="h6" color="inherit" >
              Sair da Loja
            </Typography>
        </ListItem>
        </List>
      </Drawer>
    </AppBar>

)}
  return (
    <>
      {navbarComponent}
    </>
    
  );
};

export default MyAppBar;