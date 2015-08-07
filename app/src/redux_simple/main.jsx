

import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores/mysotres';
import CounterApp from './app.jsx';

const redux = createRedux(stores);

export default class App extends React.Component {
    render() {

        return (
            <Provider redux={redux}>
                {() => <CounterApp />}
            </Provider>
        );
    }
}

React.render(
    <App />,
    document.body
);



