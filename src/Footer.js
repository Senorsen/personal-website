import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import {autobind} from 'core-decorators';

@autobind
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="mui-container mui--text-center">
                    Senorsen 2016 | <a href="mailto:senorsen.zhang@gmail.com">Email</a> | <a href="https://github.com/Senorsen" target="_blank">GitHub</a>
                </div>
            </footer>
        )
    }
}

export default Footer;