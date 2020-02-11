import React from 'react';
import Header from '../../components/Header/Header';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Sou a Login</h1>
            </div>
        )
    }
}

export default Login;