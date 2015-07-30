

/*import {Header} from './header/header.jsx';
import {Content} from './content/content.jsx';
import {Footer} from './footer/footer.jsx';*/
var React = require('react');
var StyleSheet = require('react-style');

var style = {
    main:{
        height: '100%',
        display:'flex',
        flexDirection:'column',
        flexWrap:'nowrap',
        border:'1px solid black'
    },
    header:{
        fontSize: '1rem',
        flex:'0 0 4em',
        display:'flex',
        flexDirection:'row',
        border:'1px solid black'
    },
    content:{
        flex:'5 1 auto',
        display:'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        fontSize: '1rem',
        border:'1px solid black'
    },
    footer:{
        flex:'0 0 2em',
        fontSize: '1rem',
        border:'1px solid black',
        justifyContent: 'flex-end'
    }

};

style = StyleSheet.create(style);


//@Radium
export class App extends React.Component {
    constructor(props) {
        super(props);
    }
    click (){
        console.log(70);
    }

    render () {
        return (

                <div onClick={this.click} styles={[style.main]}>
                  <span>hello</span>
                  <span>hello</span>
                </div>


        );
    }

}

//module.hot.accept();


/*
<div style={[style.main]}>
    <Header styles={style.header}/>
    <Content styles={style.content}/>
    <Footer styles={style.footer}/>
</div>
*/

//React.render(<Main/>, document.body);