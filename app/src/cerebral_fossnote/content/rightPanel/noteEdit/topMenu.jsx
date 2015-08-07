
import {Decorator as Cerebral} from 'cerebral-react-immutable-store';


@Cerebral({
    selectedNote:['selectedNote']
})
class topMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        return (
            <div className='topMenu'>
                <button>Some Action</button>
            </div>
        );
    }

}

export default topMenu

