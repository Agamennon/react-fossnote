
import {Notes} from './notes/notes.jsx';
import {Note} from './note/note.jsx';
require('./content.scss');

export class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className='content'>
                <Notes/>
                <Note/>
            </div>
        );
    }

}

