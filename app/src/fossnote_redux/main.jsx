
import { createRedux, composeStores } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './redux/stores';
import App from './app.jsx';

import { Router, Route, Link } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import { reduxRouteComponent } from 'redux-react-router';

//const store = composeStores(stores);

const redux = createRedux(stores);
//const redux = createRedux(store);

export default class Main extends React.Component {

    render() {
        return (
            <Provider redux={redux}>
                {() => <App />}
            </Provider>
        );
    }

}

React.render(

    <Router history={history}>

        <Route component={Main}>
            <Route path="/" component={Main}/>
            <Route path=":id" component={Main}/>
        </Route>

    </Router>
    ,
    document.body

);



