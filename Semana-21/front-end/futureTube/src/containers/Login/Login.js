import React from 'react';
import Header from '../../components/Header/Header';
import {
    InputEmail,
    InputPassword,
    TextRegisterUser,
    ContentLogin,
    TextLogin,
    ButtonLoginDiv,
    MainButtonLogin
} from './styled';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false
        }
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        return (
            <ContentLogin>

                <Header />

                <TextLogin>Entrar</TextLogin>

                <InputEmail
                    required
                    id="outlined-required-name"
                    label="E-mail"
                    placeholder="email@email.com"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    name="email"
                    type="email"
                />

                <InputPassword
                    required
                    label="Senha"
                    placeholder="Mínimo 6 caracteres"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                >
                                    {this.state.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                            <Visibility />
                                        )}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    name="password"
                    id="password"
                    type={this.state.showPassword ? 'text' : 'password'}
                />

                <TextRegisterUser>
                    Não possui cadastro?{' '}
                    <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>
                        Clique aqui.
                    </Link>
                </TextRegisterUser>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ButtonLoginDiv>
                        <MainButtonLogin>Entrar</MainButtonLogin>
                    </ButtonLoginDiv>
                </Link>

            </ContentLogin>
        )
    }
}

