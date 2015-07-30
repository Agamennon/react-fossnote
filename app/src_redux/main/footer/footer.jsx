var style = {
    backgroundColor:'red'
};

//@Radium
export class Footer extends React.Component {

    constructor(props) {
        super(props);
    }
    render () {
        return (
            <footer style={[this.props.styles]}>
                <span style={[style]}>i am a footeeeeer</span>
            </footer>
        );
    }

}
//module.hot.accept();
