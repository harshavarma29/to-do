import React, {Component} from 'react';
import CreateList from './CreateList';
import Search from './Search';

class ongoing extends Component {
    constructor() {
        super();

        this.state = {
            searchList: "",
            doing: ""
        }
    }

    componentWillMount() {
        console.log("fetch");
        async function data(email) {
            console.log(email)
            var response = await fetch("http://localhost:3005/doing/"+email, {
                "method": "get",
                "headers": {"Content-Type": "application/json"}
            })
            return await response.json();
        }
        console.log(this.props.email_id);
        var userdata = data(this.props.email_id) 

        userdata.then(user => {
            console.log(user);
            this.setState({
                doing: user
            })
        })
    }

    target = (event) => {
        this.setState({
            searchList: event.target.value
        })
    }

    render() {
        console.log(this.state.doing);
        var userlist = this.state.doing;
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

export default ongoing;