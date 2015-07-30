
import {HeaderItem} from './header-item.jsx'

//@Radium
export class Header extends React.Component {

    constructor(props) {
        super(props);

    }
    render () {
        return (
            <header  style={[this.props.styles]}>
                  <HeaderItem/>
                  <HeaderItem/>
                  <HeaderItem/>
            </header>
        );
    }

}
//module.hot.accept();
