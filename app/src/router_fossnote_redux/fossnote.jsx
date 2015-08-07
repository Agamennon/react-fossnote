import Sidebar from './sidebar/sidebar.jsx';
import Content from './content/content.jsx';
import './main.scss';
import { PropTypes } from 'react';

export default class FossNote extends React.Component {

    static propTypes = {
        sidePanelPosition: PropTypes.string.isRequired,
        toggleSidePanel: PropTypes.func.isRequired,
        leftContent: PropTypes.object.isRequired,
        toggleLeftContent: PropTypes.func.isRequired

    };

    constructor(props) {
        super(props);
    }
    render () {

        return (
            <div className='app'>
                <Sidebar {...this.props} />
                <Content {...this.props}>  {this.props.children} </Content>
            </div>
        );
    }

}


