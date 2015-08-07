
import './offcanvas.scss';
//require ('./offcanvas.scss');

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.test = this.test.bind(this);
        this.state  = {open:true,
            collapse:false
        };
    }
    handleClick (){
        var open = !this.state.open;
        this.setState({open:open});
    }

    test (){
        var collapse = !this.state.collapse;
        this.setState({collapse:collapse});
    }

    render () {
        var toggleClass = classnames({
            isOpen:this.state.open,
            content:true
        });

        var left = classnames({
            leftContent:true,
            collapse:this.state.collapse
        });


        return (

            <div className='app'>
                <div className='sidebar'>
                    <div className='title'>
                        <span>FossNote</span>
                    </div>
                    <ul className='nav'>
                        <li>
                            <a onClick={this.test} className='active'>All Notes</a>
                        </li>
                        <li>
                            <a>Notebooks</a>
                        </li>
                        <li>
                            <a>Tags</a>
                        </li>
                        <li>
                            <a>Settings</a>
                        </li>
                    </ul>
                </div>



                    <div className={toggleClass}>
                        <div className={left}>

                            <div className='topMenu'>
                                <a onClick={this.handleClick} className='button'></a>
                            </div>

                            <h1>Left Flex Screen</h1>
                            <h2>Where my notes or tags are</h2>

                            <div style={{
                            minWidth:'300px',
                            backgroundColor:'red'
                            }}>
                                Iaaa AM THE OWN ORGASMATRON
                            </div>

                            Lorem ipsum dolor sit amet, nec id mediocrem instructior, eum utamur delicata ut, mea ne facer repudiare. Mea an corrumpit splendide. Ea per meis option accusam, ceteros delicata ne has. Sea no lorem assum imperdiet, probo malis vidisse ut duo, ad his prodesset expetendis deterruisset. Vel splendide definiebas vituperatoribus ea, sea te ubique persecuti. Unum idque ut nam.

                            Eam ut natum fastidii complectitur. Eam dolorum debitis intellegat eu, in possim recusabo sed. No nam eirmod nusquam accusata, altera ocurreret qui et. Mel elit aeque scriptorem et, meis interesset ei pri, ullum labitur facilisis ei ius. Nec affert saperet cu, id sed commodo eruditi pertinacia.

                            Sonet causae deseruisse ut mel, unum aeque ea nec. Ad vix corrumpit omittantur, vim id ullum consequuntur, at deserunt signiferumque vix. Te alia sint purto quo, no vero omnis eam. Per et putant impetus expetenda, sea id movet eirmod interesset. Equidem dolorem ex pri, ea partem instructior vituperatoribus eum.

                            Eu dicunt euismod salutandi mel, pri an democritum deseruisse, officiis molestiae et mel. Ea veniam vivendo expetendis per, agam scripta eos no. Vel in nibh nostrud. Quo te sumo vero consul. Dicunt convenire vis ex, te sensibus disputationi vis. Et pro fastidii antiopam, ei mel adipiscing disputationi, vix dico everti regione ea.

                            Ex assum vidisse nominavi duo. Ullum gloriatur ex sit, eam diam euismod et. Mel cu ignota petentium. Sea purto homero reformidans ei, mei ex nisl inani. Nostrum assueverit ea has, ius vero periculis persequeris no. Et pro omnes atomorum, ex mei laoreet officiis expetendis, cu tale corpora temporibus vis. Aperiri admodum recusabo qui no, democritum suscipiantur signiferumque no mei.
                            Lorem ipsum dolor sit amet, nec id mediocrem instructior, eum utamur delicata ut, mea ne facer repudiare. Mea an corrumpit splendide. Ea per meis option accusam, ceteros delicata ne has. Sea no lorem assum imperdiet, probo malis vidisse ut duo, ad his prodesset expetendis deterruisset. Vel splendide definiebas vituperatoribus ea, sea te ubique persecuti. Unum idque ut nam.

                            Eam ut natum fastidii complectitur. Eam dolorum debitis intellegat eu, in possim recusabo sed. No nam eirmod nusquam accusata, altera ocurreret qui et. Mel elit aeque scriptorem et, meis interesset ei pri, ullum labitur facilisis ei ius. Nec affert saperet cu, id sed commodo eruditi pertinacia.

                            Sonet causae deseruisse ut mel, unum aeque ea nec. Ad vix corrumpit omittantur, vim id ullum consequuntur, at deserunt signiferumque vix. Te alia sint purto quo, no vero omnis eam. Per et putant impetus expetenda, sea id movet eirmod interesset. Equidem dolorem ex pri, ea partem instructior vituperatoribus eum.

                            Eu dicunt euismod salutandi mel, pri an democritum deseum utamur delicata ut, mea ne facer repudiare. Mea an corrumpit splendide. Ea per meis option accusam, ceteros delicata ne has. Sea no lorem assum imperdiet, probo malis vidisse ut duo, ad his prodesset expetendis deterruisset. Vel splendide definiebas vituperatoribus ea, sea te ubique persecuti. Unum idque ut nam.



                        </div>
                        <div className='rightContent'>
                            <h1>Left Flex Screen</h1>
                            <h2>Where my notes or tags are</h2>

                            Lorem ipsum dolor sit amet, nec id mediocrem instructior, eum utamur delicata ut, mea ne facer repudiare. Mea an corrumpit splendide. Ea per meis option accusam, ceteros delicata ne has. Sea no lorem assum imperdiet, probo malis vidisse ut duo, ad his prodesset expetendis deterruisset. Vel splendide definiebas vituperatoribus ea, sea te ubique persecuti. Unum idque ut nam.

                            Eam ut natum fastidii complectitur. Eam dolorum debitis intellegat eu, in possim recusabo sed. No nam eirmod nusquam accusata, altera ocurreret qui et. Mel elit aeque scriptorem et, meis interesset ei pri, ullum labitur facilisis ei ius. Nec affert saperet cu, id sed commodo eruditi pertinacia.

                            Sonet causae deseruisse ut mel, unum aeque ea nec. Ad vix corrumpit omittantur, vim id ullum consequuntur, at deserunt signiferumque vix. Te alia sint purto quo, no vero omnis eam. Per et putant impetus expetenda, sea id movet eirmod interesset. Equidem dolorem ex pri, ea partem instructior vituperatoribus eum.

                            Eu dicunt euismod salutandi mel, pri an democritum deseruisse, officiis molestiae et mel. Ea veniam vivendo expetendis per, agam scripta eos no. Vel in nibh nostrud. Quo te sumo vero consul. Dicunt convenire vis ex, te sensibus disputationi vis. Et pro fastidii antiopam, ei mel adipiscing disputationi, vix dico everti regione ea.

                            Ex assum vidisse nominavi duo. Ullum gloriatur ex sit, eam diam euismod et. Mel cu ignota petentium. Sea purto homero reformidans ei, mei ex nisl inani. Nostrum assueverit ea has, ius vero periculis persequeris no. Et pro omnes atomorum, ex mei laoreet officiis expetendis, cu tale corpora temporibus vis. Aperiri admodum recusabo qui no, democritum suscipiantur signiferumque no mei.
                            Lorem ipsum dolor sit amet, nec id mediocrem instructior, eum utamur delicata ut, mea ne facer repudiare. Mea an corrumpit splendide. Ea per meis option accusam, ceteros delicata ne has. Sea no lorem assum imperdiet, probo malis vidisse ut duo, ad his prodesset expetendis deterruisset. Vel splendide definiebas vituperatoribus ea, sea te ubique persecuti. Unum idque ut nam.

                            Eam ut natum fastidii complectitur. Eam dolorum debitis intellegat eu, in possim recusabo sed. No nam eirmod nusquam accusata, altera ocurreret qui et. Mel elit aeque scriptorem et, meis interesset ei pri, ullum labitur facilisis ei ius. Nec affert saperet cu, id sed commodo eruditi pertinacia.

                            Sonet causae deseruisse ut mel, unum aeque ea nec. Ad vix corrumpit omittantur, vim id ullum consequuntur, at deserunt signiferumque vix. Te alia sint purto quo, no vero omnis eam. Per et putant impetus expetenda, sea id movet eirmod interesset. Equidem dolorem ex pri, ea partem instructior vituperatoribus eum.

                            Eu dicunt euismod salutandi mel, pri an democritum deseum utamur delicata ut, mea ne facer repudiare. Mea an corrumpit splendide. Ea per meis option accusam, ceteros delicata ne has. Sea no lorem assum imperdiet, probo malis vidisse ut duo, ad his prodesset expetendis deterruisset. Vel splendide definiebas vituperatoribus ea, sea te ubique persecuti. Unum idque ut nam.


                        </div>




                </div>

            </div>


        );
    }

}

React.render(<App/>, document.body);