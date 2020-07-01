import React, {Component} from "react";
import AllLists from "./AllLists";

class lists extends Component {

    render() {
        console.log("from lists");
        console.log(this.props.userTasks);
        
        return <div>
                    <AllLists myData={this.props.userTasks}/>
                </div>
    }
}

export default lists;