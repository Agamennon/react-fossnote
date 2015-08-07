import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import FossNote from './fossnote.jsx';
import * as FossnoteActions from './redux/actions';


@connect(state => ({
    sidePanelPosition: state.sidePanelPosition,
    leftContent:state.leftContent
}))

export default class App extends React.Component {
    render() {
        const { sidePanelPosition,leftContent, dispatch } = this.props;
        return (
            <FossNote sidePanelPosition={sidePanelPosition} leftContent={leftContent}
                {...bindActionCreators(FossnoteActions, dispatch)} >
            </FossNote>
        );
    }
}
