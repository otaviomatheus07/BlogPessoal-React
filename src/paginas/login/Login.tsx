import { ChangeEvent, useEffect, useState } from 'react'
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import UsuarioLogin from '../models/UsuarioLogin';
import { login } from '../../service/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/action';
import { toast } from 'react-toastify';


function Login() {
    let navigate = useNavigate();
    const [token, setToken]= useState('');
    const dispatch = useDispatch()


    const [userLogin, setUserLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token !== ''){
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit (e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
           await login(`/usuarios/logar`, userLogin,setToken)

           toast.info('Usuário logado com sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }catch(error){
            toast.error('Erro ao logar, revise os campos', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }

    
    return (
        <Grid   container direction='row' justifyContent='center' alignItems='center'>
            <Grid className='caixa' alignItems='center' xs={6}>
                <Box paddingX={20}>
                <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textoscomponents'>Seja bem Vindo(a)</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary' className='botaologar' >
                                    Logar
                                </Button>
                        </Box>
                </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='text-decorator-none'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textoscomponents2'>Cadastre-se</Typography>
                        </Link>    
                    </Box>
                </Box>
                
            </Grid>
            <Grid xs={4} className='imagem'>
                
            </Grid>
        </Grid>
    );
}

export default Login