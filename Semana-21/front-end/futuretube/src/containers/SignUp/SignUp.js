import React from 'react';
import Header from '../../components/Header/Header';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <h1>Sou a Signup</h1>
            </div>
        )
    }
}

export default SignUp;