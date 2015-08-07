import './rightPanel.scss'
import {Decorator as Cerebral} from 'cerebral-react-immutable-store';

@Cerebral({
    selectedNote:['selectedNote']
})
class rightPanel extends React.Component {



    constructor(props) {
        super(props);


    }


    render () {
        var note = this.props.selectedNote || {text:'no notes selected'};
        console.log('rendereing right panel');
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
                <div >{note.text}</div>
            </div>
        );
    }

}

export default rightPanel