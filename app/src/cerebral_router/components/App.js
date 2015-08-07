import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react-immutable-store';
var qs = require('query-string');

@Cerebral({
    list:['list'],
    inputValue:['inputValue'],
    hash:['router','hash'],
    router:['router']
})
class App extends React.Component {

    onFormSubmit(event){
        event.preventDefault();
        this.props.signals.formSubmited();
    }

    renderItem(item,index){

       return (
           <li key={index}>
               {item.name}
               {item.$isSaving ? '(saving)' : null}

           </li>
       );
    }
    render (){
         var myroute = {};
        myroute.mae = 20;
        myroute.leo = 30;
        return (
            <div>
                <h1>Hello World - HASH = ({this.props.router.hash}) </h1>
                <br/>
                <a href="#/messages/123">Open message 123</a>
                <br/>
                <a href="#/bogus/aa">Bogus aa</a>
                <br/>
                <a href={'#/leo/?'+qs.stringify(myroute)}>special</a>
                <br/>

                <br/>
                <form onSubmit={(e) => this.onFormSubmit(e)}>
                    <input
                        type='text'
                        value={this.props.inputValue}
                        onChange={(e) => this.props.signals.inputValueChanged(true,{value: e.target.value})}/>
                </form>
                <ul>
                    {this.props.list.map(this.renderItem)}
                </ul>
            </div>
        )
    }
}

export default App;

/*     <a onClick={() => this.props.signals.routerStateChanged({url:'/gui/10'})}>Seting to gui direct</a>*/