/*import React, {Component} from "react";
import Lists from './Lists'

class list extends Component {

    constructor() {
        super();

        this.state = {
            mydata: "",
            todolist: "",
            todonelist: "",
            doing: ""
        }
    }

    componentWillMount() {
        console.log("fetch");
        async function data(email) {
            var response = await fetch("http://localhost:3005/"+email, {
                "method": "get",
                "headers": {"Content-Type": "application/json"}
            })
            return await response.json();
        }

        var userdata = data(this.props.mail) 

        userdata.then(user => {
            this.setState({
                mydata: user
            })
        })
    }

    render() {
        var userlist = listdata;
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
                            time: userlist[j].time
                        })
                        visited[j]++;
                    }
                }
            }
            if(lists.length!=0) listArr.push(lists)
        } 

        return ("harsha" === '')?
                <div>
                    Loading...
                </div>
               :
               <div>
                    <Lists userTasks={lists}/>
               </div>
    }
}

export default list;*/