

var style = {

        flex:1,
        border:'1px solid black'

};


//@Radium
export class HeaderItem extends React.Component {

    constructor(props) {
        super(props);
      //  this.style = style;

    }
    render () {
        return (
            <div  style={[style]}>
                  <span> I am a header itemmm</span>
            </div>
        );
    }

}
//module.hot.accept();
