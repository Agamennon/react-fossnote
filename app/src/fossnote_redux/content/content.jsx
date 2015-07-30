
import LeftPanel from  './leftPanel/leftPanel.jsx';
import RightPanel from  './rightPanel/rightPanel.jsx';
import './content.scss';

export default class content extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className='content isOpen'>
                <LeftPanel/>
                <RightPanel/>
            </div>
        );
    }

}

