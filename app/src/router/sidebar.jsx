export default class sidebar extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    click () {
        alert('hello motherfuckers');
        this.context.router.transitionTo('gui');
    }


    render () {
      //  console.log(this.props.children);
      //  console.log(this.context.router);
      //  console.log(this.props.location);
     //   console.log(this.context.router);
        return (
            <div>

                <span onClick={::this.click}>i am a sidebar</span>
                {this.props.children}

            </div>
        )
    }
}

