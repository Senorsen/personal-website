import React from 'react';
import Appbar from 'muicss/lib/react/appbar';
import {autobind} from 'core-decorators';
import * as style from './styles/appbar.scss';

@autobind
class MyAppBar extends React.Component {
    style = {
        right: {
            textAlign: 'right'
        }
    };

    render() {
        return (
            <header className="mui-appbar my-appbar">
                <div className="mui-container">
                    <table width="100%"><tbody>
                        <tr className="mui--appbar-height">
                            <td className="mui--text-title">Senorsen</td>
                            <td style={this.style.right}>
                                <ul className="mui-list--inline mui--text-body2">
                                    <li><a href="https://blog.senorsen.com">Blog</a></li>
                                    <li><a href="https://resume.senorsen.com">Resume</a></li>
                                    <li><a href="https://www.senorsen.com/misc">Misc.</a></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody></table>
                </div>
            </header>
        );
    }
}

export default MyAppBar;