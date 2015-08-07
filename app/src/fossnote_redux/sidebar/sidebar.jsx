
import { Link } from 'react-router';
import './sidebar.scss';

export default class Sidebar extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };
    constructor(props) {
        super(props);
    }

    render () {
        //console.log(this.props.leftContent.colapse);
        var location = this.context.router.state.location;
        var isActive = this.context.router.isActive(location.pathname,location.query);
        console.log(location);
        console.log(isActive);
        return (
            <div className='sidebar'>
                <div className='title'>
                    <span>FossNote</span>
                </div>
                <ul className='nav'>
                    <li>
                        <Link to="/" onClick={this.props.toggleLeftContent} >All Notes</Link>

                    </li>
                    <li>
                        <Link to="/notebooks">Notebooks</Link>
                    </li>
                    <li>
                        <Link to="/tags">Tags</Link>

                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </div>
        );
    }

}

/*
<a onClick={this.props.toggleLeftContent} className='active'>All Notes - {this.props.leftContent.colapse?'true':'false'}</a>
*/
