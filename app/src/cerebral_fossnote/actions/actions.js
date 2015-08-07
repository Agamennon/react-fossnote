export default {
    setInputValue(args,state){
        state.set('inputValue',args.value);

    },
    addNote(args,state){
      //  const name = state.get('inputValue');
        let ref = parseInt(Math.random() * 1000);
        console.log('adding notes');
        state.set(['notes',ref],{
            text:args.text,
            title:args.title,
            $isSaving:true,
            name:args.value
        });

        return {
            ref:ref
        }

    },


    selectNote(args,state){
        //  const name = state.get('inputValue');
        const id = args.id;
        const note = state.get(['notes',id]);
        state.set(['selectedNote'],note);


    },


    increaseRef (args,state){
        let currentRef = state.get('nextRef');
        state.set('nextRef',++currentRef);
    },
    resetInputValue(args,state){
        state.set('inputValue','');
    },

    displayList(args,state){
        const items = state.get('items');
        state.set('list',Object.keys(items));
    },

    saveItem (args,state,promise){
        const item = state.get('items',args.ref);
        args.utils.request.post('/items',{
          name:item.name
        }, function(err,response){
            if (err){
                promise.reject({error:err});
            } else {
                promise.resolve(JSON.parse(response.text));
            }
        });
    },
    updateItemId (args,state){

       state.merge(['items',args.ref],{
           $isSaving:false,
           id:args.id
       });
    }



}