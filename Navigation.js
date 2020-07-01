import React,{Component} from 'react';

class Navigation extends Component {

    lists = () => {
        this.props.selection("Lists");
    }
    
    todo = () => {
        this.props.selection("To-do List");
    }

    todone = () => {
        this.props.selection("To-done List");
    }

    ongoing = () => {
        this.props.selection("Doing List");
    }

    openForm = () => {
        this.props.selection("login");
    }

    render() {
        console.log(this.props.user)
        return <div>
                    <nav className="nav-bar">
                        <ul className="ul">
                            <div className="logo">{this.props.navigate}</div>
                            <span className="user">{this.props.user}</span>
                            <li className="li"><a onClick={this.openForm}>Logout</a></li>
                            <li className="li"><a onClick={this.todone}>To-done</a></li>
                            <li className="li"><a onClick={this.ongoing}>Doing</a></li>
                            <li className="li"><a onClick={this.todo}>To-do</a></li>
                            <li className="li"><a onClick={this.lists}>Lists</a></li>
                        </ul>
                    </nav>
                </div>
    }
}

export default Navigation;