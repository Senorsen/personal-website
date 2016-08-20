import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import * as muicss from 'muicss/lib/sass/mui.scss';

import MyAppbar from './MyAppbar';
import Footer from './Footer';

import './styles/style.scss';

class Main extends React.Component {
    render() {
        return (
            <div className="app-container">
                <MyAppbar />
                <Container className="content-container">
                </Container>
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));