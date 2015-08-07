
import './sidebar.scss';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state  = {collapse:false};
    }


    handleClick (){
        var collapse = !this.state.collapse;
        this.setState({collapse:collapse});
    }

    render () {

        var left = classnames({
            leftContent:true,
            collapse:this.state.collapse
        });

        return (
            <div className='sidebar'>
                <div className='title'>
                    <span>FossNote</span>
                </div>
                <ul className='nav'>
                    <li>
                        <a onClick={this.handleClick} className='active'>All Notes</a>
                    </li>
                    <li>
                        <a>Notebooks</a>
                    </li>
                    <li>
                        <a>Tags</a>
                    </li>
                    <li>
                        <a>Settings</a>
                    </li>
                </ul>
            </div>
        );
    }

}

