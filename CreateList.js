import React, {Component} from 'react';

var index=0;
class create extends Component {
    render() {
        var data = this.props.data;
        console.log("from createlist");
        Object.keys(data).forEach(task => {
            console.log(data[task][0].title)
        })
        return (
            <div className="lists">
                {
                    Object.keys(data).map((list, index) => {
                        console.log(data[list][0]);
                        console.log(data[list]);
                        console.log(data[list][0].title)
                        return (
                            <div className="create-list border list">
                                <div className="list-title">
                                        <header className="title-grid">
                                            <textarea id="title" className="titleText border title-size" placeholder="No Title" value={data[list][0].title}/>
                                        </header>
                                </div>
                                <hr className="headhr"/> 
                                <div className="list-index">
                                    <ol>
                                        {
                                            data[list].map((task, index) => {
                                                console.log(task)
                                                console.log(task.title)
                                                if(this.props.from === "allLists") {
                                                    var color;
                                                    var today = new Date();
                                                    var hh = today.getHours(), mm=today.getMinutes();
                                                    if(hh<10) hh='0'+hh;
                                                    if(mm<10) mm='0'+mm;
                                                    var time=hh+":"+mm;
                                                    
                                                    var year = today.getFullYear(), month = (today.getMonth()+1), dat=today.getDate();
                                                    if(month<10) month='0'+month;
                                                    if(dat<10) dat='0'+dat;
                                                    var date=year+"-"+month+"-"+dat
                                                    console.log(date);
                                                    if(task.time == "" && task.toTime == "") color = "";
                                                    else if(task.date > date || (task.date == date && task.time>time)) color = "#5ae991";
                                                    else if(task.date == date && task.time<=time && (time<=task.toTime || task.toTime=="")) color = "#56b3e9";
                                                    else if(task.date < date || (task.date == date && task.toTime<time)) color = "rgb(241, 180, 66)";
                                                }
                                                return <li key={index} className="liTask" style={{"backgroundColor": color}}>
                                                            <div className="task-line">
                                                                <textarea id={"task"+index} className="setColor textarea task-size" style={{"backgroundColor": color}} placeholder="No Task" value={task.task}/>
                                                                <div className="credent date-color">
                                                                    <div className="date1 border">{task.date}</div>
                                                                    <div className="subcredent">
                                                                        <div className="subL time1 border">{task.time}</div>
                                                                        <div className="subR time1 border">{task.toTime}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr className="taskhr"/>
                                                        </li>
                                            })
                                        }
                                    </ol>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default create;

/*

return (
            <div className="lists">
                {
                    Object.keys(data).map(task => {
                        return (
                            <div className="create-list border">
                                <div className="list-title">
                                        <header className="title-grid">
                                            <textarea id="title" onChange={this.addTitle} className="titleText border title-size" placeholder="Enter Title">data[task][index].title</textarea>
                                        </header>
                                </div>
                                <hr className="headhr"/> 
                                <div className="list-index">
                                    <ol>
                                        <li key={index}>
                                            <div className="task-line">
                                                <textarea id={"task"+index} className="textarea task-size" placeholder="Enter Task">Play shuttle</textarea>
                                                <div className="credent">
                                                    <div className="date1 border">30/12/2020</div>
                                                    <div className="sub time1 border">09:45 PM</div>
                                                </div>
                                            </div>
                                            <hr className="taskhr"/>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        )
                    });
                }
            </div>
        );
                        <div className="create-list border">
                            <div className="list-title">
                                    <header className="title-grid">
                                        <textarea id="title" onChange={this.addTitle} className="titleText border title-size" placeholder="Enter Title">data[task][index].title</textarea>
                                    </header>
                            </div>
                            <hr className="headhr"/> 
                            <div className="list-index">
                                <ol>
                                    <li key={index}>
                                        <div className="task-line">
                                            <textarea id={"task"+index} className="textarea task-size" placeholder="Enter Task">Play shuttle</textarea>
                                            <div className="credent">
                                                <div className="date1 border">30/12/2020</div>
                                                <div className="sub time1 border">09:45 PM</div>
                                            </div>
                                        </div>
                                        <hr className="taskhr"/>
                                    </li>
                                </ol>
                            </div>
                        </div>*/