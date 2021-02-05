import React, { Component } from 'react'
import './Dashboard.css'

import Module from '../Module'
import { Button } from '../../layout'

class Dashboard extends Component {
    state = {
        module1: false,
        module2: false,
        module3: false,
        module4: false
    }

    /**
     * Times transitions on component mount
     */
    componentDidMount() {
        setTimeout(() => this.setState({module1: true}), 500);
        setTimeout(() => this.setState({module2: true}), 900);
        setTimeout(() => this.setState({module3: true}), 1400);
        setTimeout(() => this.setState({module4: true}), 1900);
    }

    render() {
        const { module1, module2, module3, module4 } = this.state;
        const { changePage } = this.props;
        
        return (
            <div style={{display: "flex", flexDirection: "column", height: "100vh", background: "white"}}>
                <div className="back-module">
                    <Button onClick={() => changePage('card')}>
                        <i className="material-icons">keyboard_arrow_left</i>
                        Card
                    </Button>
                    <p>Dashboard</p>
                </div>
                <div className="dashboard-modules">
                    <Module id="a" color="linear-gradient(red,#ff5858)" align="end" justify="end" title="L"
                    desc="the way you . . ." opacity={module1}>
                        is for the way you look at me
                    </Module>
                    <Module id="b" color="linear-gradient(#5145a1,#7f6bff)" align="end" justify="start" title="O"
                    desc="and no other" opacity={module2}>
                        is for the only one I see
                    </Module>
                    <Module id="c" color="linear-gradient(#599eff,#467bc7)" align="start" justify="end" title="V"
                    desc="fav moments" opacity={module3}>
                        is very very... extraordinary
                    </Module>
                    <Module id="d" color="linear-gradient(#ffb073, #e3b662)" align="start" justify="start" title="E"
                    desc="a lil more love" opacity={module4}>
                        is for everything that I adore
                    </Module>
                </div>
            </div>
        )
    }
}

export default Dashboard;