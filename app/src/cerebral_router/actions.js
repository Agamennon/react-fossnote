export default {
    setInputValue(args,state){
        state.set('inputValue',args.value);

    },
    addItem(args,state){
        const name = state.get('inputValue');
        let ref = state.get('nextRef');
        state.set(['items',ref],{
            $ref:ref,
            $isSaving:true,
            name:name
        });

        return {
            ref:ref
        }

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