
import LeftPanel from  './leftPanel/leftPanel.jsx';
import RightPanel from  './rightPanel/rightPanel.jsx';
import './content.scss';

export default class content extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {

        var sidePanelPosition =  this.props.sidePanelPosition === 'opened';
       // console.log(this.props.sidePanelPosition);
        var contentClass = classnames({
            content:true,
            isOpen:sidePanelPosition
        });

        //console.log(this.props.leftContent.colapse);

        return (
            <div className={contentClass}>
                <LeftPanel {...this.props}>  {this.props.children} </LeftPanel>
                <RightPanel/>
            </div>
        );
    }

}

