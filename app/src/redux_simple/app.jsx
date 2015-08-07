import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Counter from './components/Counter';
import * as CounterActions from './actions/CounterActions';


@connect(state => ({
    side: state.side
}))

export default class CounterApp extends React.Component {
    render() {
        const { side, dispatch } = this.props;
        return (
            <Counter side={side}
                {...bindActionCreators(CounterActions, dispatch)} />
        );
    }
}
