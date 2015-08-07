import Sidebar from './sidebar/sidebar.jsx';
import Content from './content/content.jsx';
import './main.scss';

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

React.render(<App/>, document.body);

