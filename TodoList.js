import React, {Component} from 'react';
import CreateList from './CreateList';
import Search from './Search';

class TodoList extends Component {

    constructor() {
        super();

        this.state = {
            searchList: "",
            todolist: ""
        }
    }

    componentWillMount() {
        console.log("fetch");
        async function data(email) {
            var response = await fetch("http://localhost:3005/todo/"+email, {
                "method": "get",
                "headers": {"Content-Type": "application/json"}
            })
            return await response.json();
        }

        var userdata = data(this.props.email_id) 

        userdata.then(user => {
            console.log(user);
            this.setState({
                todolist: user
            })
        })
    }

    target = (event) => {
        this.setState({
            searchList: event.target.value
        })
    }

    render() {
        var userlist = this.state.todolist;
        var listArr = [], visited = [];
        for(var i=0;i<userlist.length;i++) visited[i] = 0;
        
        for(var i=0;i<userlist.length;i++) {
            var lists = [];
            if(visited[i]==0) {
                var listIndex = userlist[i].title;
                for(var j=i;j<userlist.length;j++) {
                    if(listIndex === userlist[j].title) {
                        lists.push({
                            title: userlist[j].title,
                            task: userlist[j].task,
                            date: userlist[j].date,
                            time: userlist[j].time,
                            toTime: userlist[j].toTime
                        })
                        visited[j]++;
                    }
                }
            }
            if(lists.length!=0) listArr.push(lists)
        } 

        console.log(listArr);
        console.log("from list");
        var userdata = listArr.filter((list) => {
            console.log(list)
            if(list[0].title.toLowerCase().includes(this.state.searchList.toLowerCase())) return list
        });

        return ("harsha" === '')?
                <div>
                    Loading...
                </div>
               :
               <div>
                    <Search targetValue={this.target}/>
                    {
                        (userdata.length==0)?
                            <p className="notFound">No List Found</p>
                        :
                            <div className="list-align">
                                <CreateList data={userdata}/>
                            </div>
                    }
               </div>
    }
}

export default TodoList;

{/*


    addList = () => {
        var data = [];
        for(var i=0;i<index;i++) {
            data.push({
                email: this.props.email_id,
                title: document.getElementById("title").value,
                task: document.getElementById("task"+i).value,
                date: document.getElementById("date"+i).value,
                time: document.getElementById("time"+i).value
            })
        }

        fetch("http://localhost:3005/data", {
            "method": "post",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err)) 

        index=0;
        tasks=[];
        this.setState({
            create_list: ""
        }) 
    }


    <input className="check" type="checkbox"></input>
                                            <input className="date" type="date"></input>
                                            <button className="delete">X</button>
                                            <input className="time" type="time"></input>



    <textarea></textarea>
                                            <credent>
                                            <input className="check" type="checkbox"></input>
                                            <input className="date" type="date"></input>
                                            <button className="delete">X</button>
                                            <input className="time" type="time"></input>
                                            </credent>


                                    <li>
                                        <div className="task-line">
                                            <textarea placeholder="Enter Task"></textarea>
                                            <credent>
                                                <input className="date" type="date" value="2014-02-09"></input>
                                                <subcredent>
                                                    <button className="delete" title="Delete task">X</button>
                                                    <input className="time" type="time"></input>
                                                </subcredent>
                                            </credent>
                                        </div>
                                        <hr className="taskhr"/>
                                    </li>
                                    <li>
                                        <div className="task-line">
                                            <textarea placeholder="Enter Task"></textarea>
                                            <credent>
                                                <input className="date" type="date" value="2014-02-09"></input>
                                                <subcredent>
                                                    <button className="delete" title="Delete task">X</button>
                                                    <input className="time" type="time"></input>
                                                </subcredent>
                                            </credent>
                                        </div>
                                        <hr className="taskhr"/>
                                    </li>
*/}
