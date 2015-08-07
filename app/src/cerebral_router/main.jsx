import React from 'react';
import controller from './controller.js';
import Router from './gui-router.js';


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



controller.signal('leoRouted', function urlChanged (args, state) {
    console.log('leo routed and set');
    state.set('router', args.router);
   // router.preventHashChange();
});


var router = Router (
    {
        '/leo':controller.signals.leoRouted
    }
,controller);

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
