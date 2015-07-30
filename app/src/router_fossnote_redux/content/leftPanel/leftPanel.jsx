
import './leftPanel.scss';

export default class leftPanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render () {
       // console.log(this.props.leftContent.colapse);
        var leftPanelClass = classnames({
            leftPanel:true,
            collapse:this.props.leftContent.colapse
        });
        return (
            <div className={leftPanelClass}>
                <div className='topMenu'>
                    <a onClick={this.props.toggleSidePanel}  className='button'></a>
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

