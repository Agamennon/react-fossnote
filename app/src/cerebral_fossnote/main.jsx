import Sidebar from './sidebar/sidebar.jsx';
import Content from './content/content.jsx';
import './main.scss';

import controller from './controller/controller.js';
import  * as actions from './actions/actions.js';
import Router from './gui-router.js';


import {Decorator as Cerebral} from 'cerebral-react-immutable-store';

controller.signal ('noteAdded',actions.addNote);
controller.signal ('noteSelected',actions.selectNote);

@Cerebral({
    inputValue:['inputValue']
})
export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {


        return (
            <div className='app'>
                <Sidebar/>
                <Content/>
            </div>
        );
    }

}

//React.render(<App/>, document.body);

var router = Router (
    {
    }
    ,controller);

window.location.assign('#/all');

React.render(controller.injectInto(App),document.body);
