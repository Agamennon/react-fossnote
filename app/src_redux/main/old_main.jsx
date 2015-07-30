//import React from 'react';
//import * as sa from 'superagent';


/*var React = require('react');
var Calendar = React.createClass({

    handleClick:function() {
        var x = 27;
        var y = 400 ;
        var z = x + y;
        console.log(z);
    },


    render: function () {
        var sty = {color : 'red'};
        var x = 66;
        var y = 90 ;
        var z = x + y;
        console.log(z);
        return (
            <div>
                <h1 style={sty} onClick={this.handleClick}>Dashboarddd</h1>
                <div> hello toooo </div>
            </div>
        );
    }
});

React.render(<Calendar/>, document.body);*/

/*

var Test = React.createClass({
    render: function () {


        return (
            <div>
                <div>
                    <span>fuck all</span>
                </div>
                <div>
                    <span>fuck yeah</span>
                </div>
                <div>
                    <span>fuck nooooo</span>
                </div>
            </div>

        );
    }
});
React.render(<Test/>, document.body);*/

var AppComponent = React.createClass({

    handleClick:function() {
        var x = 27;
        var y = 40 ;
        var z = x + y;
        console.log(z);
    },


    render: function () {
        var x = 66;
        var y = 90 ;
        var z = x + y;
        console.log(z);
        return (
            <div>
                <h1  onClick={this.handleClick}>This is Compon</h1>
                <div> hello tosadasdasssssss </div>
            </div>
        );
    }
});
module.exports = AppComponent;

React.render(<AppComponent/>, document.body);
/*

export default class Calendar extends React.Component {
    handleClick () {
        var x = 27;
        var y = 400 ;
        var z = x + y;
        console.log(z);
    }

    render () {
        var x = 66;
        var y = 90 ;
        var z = x + y;
        console.log(z);
        return (
            <div>
                <h1  onClick={this.handleClick}>Calendkre</h1>
                <div> hello Calenda fdgdfgdfg</div>
                <span>can this work it sdssssn!!?</span>
            </div>
        );
    }

}

React.render(<Calendar/>, document.body);
*/
