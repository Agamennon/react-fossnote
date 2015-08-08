import Sidebar from './sidebar/sidebar.jsx';
import Content from './content/content.jsx';
import './main.scss';

import controller from './controller/controller.js';
import  * as actions from './actions/actions.js';
import Router from './gui-router.js';
import Media from './gui-media.js';
//let injectTapEventPlugin = require("react-tap-event-plugin");
//injectTapEventPlugin();

import {Decorator as Cerebral} from 'cerebral-react-immutable-store';

controller.signal ('noteAdded',actions.addNote);
controller.signal ('noteSelected',actions.selectNote, actions.toggleShowNote);
controller.signal ('showNoteToggled',actions.toggleShowNote);
controller.signal ('hamburgerClicked',actions.toggleSideBar);
controller.signal ('sideBarItemClick',actions.toggleSideBar);
controller.signal ('notesClicked',actions.closeSideBar);
controller.signal ('modeChanged',actions.setAppMode,actions.closeSideBar);

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

Media(controller);

React.render(controller.injectInto(App),document.body);
