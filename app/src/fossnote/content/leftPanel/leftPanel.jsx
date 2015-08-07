import './leftPanel.scss';

export default class leftPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick (){

    }

    render () {
        return (
            <div className='leftPanel'>
                <div className='topMenu'>
                    <a onClick={this.handleClick} className='button'></a>
                    <button>Some Action</button>
                    <button>Some Action</button>
                    <button>Some Action</button>
                </div>

                <h1>Left Flex Screen</h1>
                <h2>Where my notes or tags are</h2>

            </div>
        );
    }

}

