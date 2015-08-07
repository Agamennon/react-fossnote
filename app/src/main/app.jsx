import {Header} from './header/header.jsx';
import {Content} from './content/content.jsx';
import {Footer} from './footer/footer.jsx';
require('./app.scss');


export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className='main'>
                <Header/>
                <Content/>
                <Footer />
            </div>

        );
    }

}

