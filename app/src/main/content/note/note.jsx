
export class Note extends React.Component {

    constructor(props) {
        super(props);

    }

    click(){
          var x = 20;
          console.log(x);
    }
    render () {
        return (
            <div className='note'>
                 <textarea onClick={this.click.bind(this)} defaultValue='i am a note dudeee!'/>
                <span>fuck</span>
            </div>
        );
    }

}
//module.hot.accept();