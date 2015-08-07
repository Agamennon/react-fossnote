
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './redux/stores';
import App from './app.jsx';

import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

const redux = createRedux(stores);


export class Tags extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired,
        redux: React.PropTypes.object.isRequired
    };
    render() {
        console.log(this.context);
        return (
            <div onClick={this.props.toggleSidePanel}>tagssssss {this.props.hello}</div>
        );
    }

}


export class Nothing extends React.Component {

    render() {
        return (
            <div></div>
        );
    }

}


export default class Main extends React.Component {

    render() {
        return (
            <Provider redux={redux}>
                {() => <App > {this.props.children}</App>}
            </Provider>
        );
    }

}

React.render(

    <Router history={history}>
        <Route component={Main}>
            <Route path="/" component={Nothing}/>
            <Route path="/tags" component={Tags}/>
        </Route>
    </Router>
    ,
    document.body

);



