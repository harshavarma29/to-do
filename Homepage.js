import React, {Component} from 'react';
import Navigation from './Navigation';
import TodoList from './TodoList';
import TodoneList from './TodoneList';
import Ongoing from './Ongoing';
import Task from './Task';

class home extends Component {
    render() {
        console.log(this.props.navigator);
        return <div>
                    <Navigation user={this.props.username} selection={this.props.selection} navigate={this.props.navigator}/>
                    { 
                        (this.props.navigator === "To-do List")?
                            <TodoList email_id={this.props.email}/>
                        :(this.props.navigator === "To-done List")?
                            <TodoneList email_id={this.props.email}/>
                        :(this.props.navigator === "Doing List")?
                            <Ongoing email_id={this.props.email}/>
                        : 
                            <Task email_id={this.props.email}/>
                    }
               </div>
    }
}

export default home;