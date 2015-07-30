import {App} from './app.jsx';
//require('../../style/app.scss');
var React = require('react');

if (typeof window !== 'undefined') {
    React.render(<App/>, document.body);
}
//React.render(<App/>, document.body);



