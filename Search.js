import React, {Component} from 'react';

class search extends Component {
    
    render() {
        return <div>
                    <input onChange={this.props.targetValue} className="search border" placeholder="Search list"></input>
                    <img className="search-logo" alt="search" src={require("./search.png")} title="search list"></img>
                </div>
    }
}

export default search;