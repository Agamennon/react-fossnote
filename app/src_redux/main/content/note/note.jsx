
var style = {
    flex:1,
    width:'100%',
    height:'100%'
};

//@Radium
export class Note extends React.Component {

    constructor(props) {
        super(props);

    }

    click(){
          var x = 10;
          console.log(x);
    }
    render () {
        return (
            <div style={[this.props.styles]}>
                 <textarea onClick={this.click.bind(this)} defaultValue='i am a note dudeee!' style={[style]}/>
                <span>fuck</span>
            </div>
        );
    }

}
//module.hot.accept();