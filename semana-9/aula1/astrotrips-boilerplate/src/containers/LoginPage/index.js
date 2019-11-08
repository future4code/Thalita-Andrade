import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { login } from "../../actions/auth";
import Paper from '@material-ui/core/Paper';


const LoginWrapper = styled.form`
  gap: 20px;
  place-content: center;
  justify-items: center;
  display: grid;
`
const FormLogin = styled(Paper) `
  width: 300px;
  height: 300px;
  display: grid;
  align-items: center;
  justify-items: center;
`
const ContainerLogin = styled.div `
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  background: #dedede;
`


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClickLogin = () => {
    const { email, password } = this.state;

    this.props.doLogin(email, password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <ContainerLogin>
      <FormLogin>
    
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
          />
          <Button onClick={this.onClickLogin}>Login</Button>
        </LoginWrapper>
          
      </FormLogin>
      </ContainerLogin>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    doLogin: (email, password) => dispatch(login(email, password))
  }
}

export default connect(
  null, 
  mapDispatchToProps
  )(LoginPage);
