import React from 'react';
import ReactDOM from 'react-dom';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import * as muicss from 'muicss/lib/sass/mui.scss';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Appbar></Appbar>
                <Container>
                    <Button color="primary">button</Button>
                </Container>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));