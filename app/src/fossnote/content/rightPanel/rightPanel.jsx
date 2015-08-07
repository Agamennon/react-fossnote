import './rightPanel.scss'

export default class rightPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className='rightPanel'>
                <div className='topMenu'>
                    <a onClick={this.handleClick} className='button'></a>
                    <button>Some Action</button>
                    <button>Some Action</button>
                    <button>Some Action</button>
                </div>
                <h1>Right Flex Screen</h1>
                <h2>Where my note is shown</h2>
            </div>
        );
    }

}

