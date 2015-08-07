//import './rightPanel.scss'
import {Decorator as Cerebral} from 'cerebral-react-immutable-store';
import NoteEdit from './noteEdit/noteEdit.jsx';


@Cerebral({
    mode:['mode']
})
class rightPanel extends React.Component {

    constructor(props) {
        super(props);
    }


    render ()

    {

        var rightPanel = classnames({
            rightPanel:true,
            mobile:this.props.mode === 'mobile'
        });

        return (
            <div className={rightPanel}>
                <NoteEdit/>
            </div>
        );
    }

}

export default rightPanel