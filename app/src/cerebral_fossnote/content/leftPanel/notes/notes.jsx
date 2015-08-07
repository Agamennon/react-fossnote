//import './notes.scss'
import {Decorator as Cerebral} from 'cerebral-react-immutable-store';
import TopMenu from './topMenu.jsx';

import Note from './note.jsx';

@Cerebral({
    notes:['notes']
})
class notes extends React.Component {
    constructor(props) {
        super(props);
        this.renderNotes = this.renderNotes.bind(this);

    }

    renderNotes (){
        return  Object.keys(this.props.notes).map((note) => {
            let obj = this.props.notes[note];
            return (
                <Note note={obj} key={note} id={note} signals={this.props.signals}/>
            )
        });
    }

    render () {
        var theNotes = this.renderNotes();
        return (
            <div className='notesWrapper'>
                <TopMenu/>
                <div onClick={()=>{this.props.signals.notesClicked()}}  className='notes'>
                    {theNotes}
                </div>
            </div>
        )
    }

}

export default notes




