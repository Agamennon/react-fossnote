
import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';



import Sidebar from './sidebar.jsx';
import Content from './content.jsx';
import Tags from './tags.jsx';

class App extends React.Component {
    render () {

        return (
            <div>
              <Sidebar>
                  {this.props.children}
              </Sidebar>
              <Content/>

            </div>
        )
    }
}

class Nothing extends React.Component {
    render () {

        return (
            <div>


            </div>
        )
    }
}



React.render((
    <Router history={history}>
        <Route component={App}>
            <Route path="/" component={Nothing}/>
            <Route path="/tags" component={Tags}/>
        </Route>
    </Router>
), document.body);