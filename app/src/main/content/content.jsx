
import {Notes} from './notes/notes.jsx';
import {Note} from './note/note.jsx';


var style = {
    notes:{
        flex: '1 0 auto',
        border:'1px solid black'
    },
    note:{
        flex: '3 0 auto',
        border:'1px solid black'
    }
};


//@Radium
export class Content extends React.Component {

    constructor(props) {
        super(props);
    }



    render () {
        return (
            <div style={[this.props.styles]}>
                <Notes styles={style.notes}/>
                <Note styles={style.note}/>
            </div>
        );
    }

}
//module.hot.accept();
