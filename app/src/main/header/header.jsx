
require('./header.scss');
import {HeaderItem} from './header-item.jsx'


export class Header extends React.Component {

    constructor(props) {
        super(props);

    }

    click(){
        console.log('1');
        console.log('2');
        console.log('3');
        console.log('4');

    }



    render () {
        return (
            <header onClick={this.click}>
                  <HeaderItem/>
                  <HeaderItem/>
                  <HeaderItem/>
            </header>
        );
    }

}
//module.hot.accept();
