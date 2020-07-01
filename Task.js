import React, {Component} from 'react';
import AllLists from './AllLists'

var tasks = [];
var index = 0;
class task extends Component {
    constructor() {
        super();

        this.state = {
            create_list: "",
            color: "",
            title: "",
            task: [],
            date: "",
            time: "",
            list_data: ""
        }
    }

    closeList = () => {
        tasks = [];
        index = 0;
        alert("The content you are added will not be stored")
        this.setState({
            create_list: ""
        })
    }

    colorChange = (event) => {
        this.setState({
            color: event.target.value
        })
        console.log(event.target.value)
    }

    addTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    addTask = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    addDate = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    addTime = (event) => {
        this.setState({
            time: event.target.value
        })
    }

    addList = () => {
        for(var i=0;i<index;i++) {
            console.log(document.getElementById("date"+i).value)
            console.log(document.getElementById("time"+i).value)
            var today = new Date();
            
            var year = today.getFullYear(), month = (today.getMonth()+1), dat=today.getDate();
            if(month<10) month='0'+month;
            if(dat<10) dat='0'+dat;
            var date=year+"-"+month+"-"+dat

            var newDate=document.getElementById("date"+i).value, newTime=document.getElementById("time"+i).value, newToTime=document.getElementById("timeEnd"+i).value;
            if(newDate=="") newDate=date;
            if(newTime=="") newTime="00:00";
            if(newToTime=="") newToTime="00:00";
            fetch("http://localhost:3005/data", {
                "method": "post",
                "headers": {"Content-Type": "application/json"},
                "body": JSON.stringify({
                    email: this.props.email_id,
                    title: document.getElementById("title").value,
                    task: document.getElementById("task"+i).value,
                    date: newDate,
                    time: newTime,
                    toTime: newToTime
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err)) 
        }

        index=0;
        tasks=[];
        this.setState({
            create_list: ""
        }) 
    }

    openTab = () => {

        this.setState({

            work: tasks.push(<li key={index}>
                                <div className="task-line">
                                    <textarea id={"task"+index} onChange={this.addTask} className="textarea" placeholder="Enter Task"></textarea>
                                    <div className="credent">
                                        <input id={"date"+index} onChange={this.addDate} className="date border" type="date"></input>
                                        <div className="subcredent">
                                            <input id={"time"+index} onChange={this.addTime} className="time border" type="time"></input>
                                            <input id={"timeEnd"+index++} onChange={this.addTime} className="timeEnd border" type="time"></input>
                                        </div>
                                    </div>
                                </div>
                                <hr className="taskhr"/>
                            </li>),

            create_list: <div className="list-area">
                            <div className="list border"  style={{"backgroundColor": this.state.color}}>
                                <header className="title-grid">
                                    <input onChange={this.colorChange} className="color border" title="choose background color" type="color" value="#91c7e5"></input>
                                    <textarea id="title" onChange={this.addTitle} className="titleText border" placeholder="Enter Title"></textarea>
                                    <button onClick={this.closeList} className="delete size" title="close">X</button>
                                </header>
                                <hr className="headhr"/> 
                                <div className="task">
                                    <ol>
                                        {tasks}
                                    </ol>
                                    <div className="adder">
                                        <img title="add a task" onClick={this.openTab} className="add-logo" alt="add" src={require("./addTask.png")}></img>
                                        <div className="addText border" placeholder="Add Task">Add Task</div>
                                        <div className="tick">
                                            <img onClick={this.addList} title="done adding" alt="done" className="done" src={require("./doneTask.png")}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        })
    }

    render() {
        return <div>
                    <img onClick={this.openTab} className="create-logo" alt="create" src={require("./create.png")} title="create list"></img>
                    {this.state.create_list}
                    <AllLists mail={this.props.email_id}/>
               </div>
    }
}

export default task;


/*<li>
    <div className="task-line">
        <textarea className="textarea" placeholder="Enter Task"></textarea>
        <credent>
            <input className="date" type="date"></input>
            <subcredent>
                <button className="delete" title="Delete task">X</button>
                <input className="time" type="time"></input>
            </subcredent>
        </credent>
    </div>
    <hr className="taskhr"/>
    </li>*/