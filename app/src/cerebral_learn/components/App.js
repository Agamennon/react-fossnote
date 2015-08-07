import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react-immutable-store';

@Cerebral({
    list:['list'],
    inputValue:['inputValue']

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
        return (
            <div>
                <h1>Hello World i liveee  </h1>
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