
import {Decorator as Cerebral} from 'cerebral-react-immutable-store';
import TopMenu from './topMenu.jsx';

@Cerebral({
    selectedNote:['selectedNote']
})
class noteEdit extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        var note = this.props.selectedNote || {text:'no notes selected'};
        return (

            <div>
                <TopMenu/>
                <h1>Right Flex Screessssn</h1>
                <h2>Where my note is shown</h2>
                <div >{note.text}</div>
            </div>
        );
    }

}

export default noteEdit

