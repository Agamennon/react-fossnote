import React from 'react';
import controller from './controller.js';

import App from './components/App.js';

import {
    setInputValue,
    addItem,
    increaseRef,
    resetInputValue,
    displayList,
    saveItem,
    updateItemId
} from './actions.js';

controller.signal ('inputValueChanged',setInputValue);
controller.signal ('formSubmited',
    addItem,
    increaseRef,
    resetInputValue,
    displayList,
    [saveItem],
    updateItemId
);

React.render(controller.injectInto(App),document.body);


/*

 export class App extends React.Component {

 render (){
 return  (
 <div><span>Hello World</span></div>
 )
 }
 }

 React.render(<App/>, document.body);*/
