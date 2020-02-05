import React from 'react';
import { ContentHome } from './styled';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <ContentHome>
                <Header/>
                Sou a Home
                <Footer/>
            </ContentHome>
        )
    }
}

export default Home;