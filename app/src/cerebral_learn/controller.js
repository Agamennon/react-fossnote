import Controller from 'cerebral-react-immutable-store';
import request from 'superagent';


const ListMapping = function (){
   return {
       value:[],
       deps:{items: ['items']},
       get (value, deps){
           return value.map(function(ref){
              return deps.items[ref]
           });

       }
   }
};


const state = {
    items: {},
    list:ListMapping,
    inputValue:'',
    nextRef:0
};

const defaultArgs  = {
  utils: {
      request:request
  }
};

export default Controller(state,defaultArgs);
