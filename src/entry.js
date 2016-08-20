import React from 'react';
import ReactDOM from 'react-dom';

import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import * as muicss from 'muicss/lib/sass/mui.scss';

import MyAppbar from './MyAppbar';

class Main extends React.Component {
    render() {
        return (
            <div>
                <MyAppbar />
                <Container>
                </Container>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));