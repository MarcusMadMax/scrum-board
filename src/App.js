import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newStoryProperty: [

      ],
      newStoryInputValue: '',
      newTaskStatusValue: '',
      newTaskDateValue: '',
    }

  }

  handleInputchange = (e) => {
    this.setState({ newStoryInputValue: e.target.value })
  }

  handleStatuschange = (e) => {
    this.setState({ newTaskStatusValue: e.target.value })
  }

  handleDatechange = (e) => {
    this.setState({ newTaskDateValue: e.target.value })
  }

  handleAddStory = (e) => {
    e.preventDefault()

    var newStory = {
      id: Date.now(),
      text: this.state.newStoryInputValue,
      status: this.state.newTaskStatusValue,
      date: this.state.newTaskDateValue,
    }

    var newStoryArray = [newStory, ...this.state.newStoryProperty]

    this.setState({
      newStoryProperty: newStoryArray,
      newStoryInputValue: ''
    })
  }

  handleDelete = (e) => {
    console.log(e.target.id)
    var deleteEntry = parseInt(e.target.id)
    var newStory = this.state.newStoryProperty
    var filteredStories = newStory.filter((item) => {
      return item.id !== deleteEntry
    })
    this.setState({ newStoryProperty: filteredStories })
  }

  render() {
    return (
      <div className="wrap">
        <header>
          <div className="input">
            <form action="#" method="GET">
              <div className="formGroup newStory">
                <label htmlFor="newStory"></label>
                <input type="text" id="newStory" placeholder="New story" value={this.state.newStoryInputValue} onChange={this.handleInputchange} />
              </div>

              <div className="formGroup criteria">
                <label htmlFor="criteria">Criteria</label>
                <select name="criteria" id="criteria" onChange={this.handleStatuschange}>
                  <option value="choose">Please choose</option>
                  <option value="backlog">Backlog</option>
                  <option value="todo">Task to do</option>
                  <option value="workip">Work in progress</option>
                  <option value="done">Task done</option>
                </select>
              </div>

              <div className="dueColor">
                <div className="formGroup">
                  <label htmlFor="dueDate">Due Date</label>
                  <input type="date" id="dueDate" placeholder="Due date" onChange={this.handleDatechange} />
                </div>

                <div className="formGroup">
                  <label htmlFor="color">Color</label>
                  <select name="color" id="color">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                  </select>
                </div>
              </div>
              <button onClick={this.handleAddStory}>Add</button>
            </form>
          </div>
          <h1>Scrum Board</h1>
        </header>
        <main>
          <div className="entry backlog">
            <h1>Backlog</h1>
            {
              this.state.newStoryProperty
                .filter((task) => {
                  return task.status === 'backlog'
                })
                .map((task) => {
                  return (
                    <div key={task.id}><div><i className="fas fa-edit"></i><i className="fas fa-times-circle" id={task.id} onClick={this.handleDelete}></i></div><br />{task.text}<br />Due Date<br />{task.date}</div>
                  )
                })
            }
          </div>
          <div className="entry todo">
            <h1>Tasks to do</h1>
            {
              this.state.newStoryProperty
                .filter((task) => {
                  return task.status === 'todo'
                })
                .map((task) => {
                  return (
                    <div className="task" key={task.id}><div className="icons"><i className="fas fa-edit"></i><i className="fas fa-times-circle" id={task.id} onClick={this.handleDelete}></i></div><br />{task.text}<br />Due Date<br />{task.date}</div>
                  )
                })
            }
          </div>
          <div className="entry workip">
            <h1>Work in<br />progress</h1>
            {
              this.state.newStoryProperty
                .filter((task) => {
                  return task.status === 'workip'
                })
                .map((task) => {
                  return (
                    <div key={task.id}><div><i className="fas fa-edit"></i><i className="fas fa-times-circle" id={task.id} onClick={this.handleDelete}></i></div><br />{task.text}<br />Due Date<br />{task.date}</div>
                  )
                })
            }
          </div>
          <div className="entry done">
            <h1>Tasks done</h1>
            {
              this.state.newStoryProperty
                .filter((task) => {
                  return task.status === 'done'
                })
                .map((task) => {
                  return (
                      <div key={task.id}><div><i className="fas fa-edit"></i><i className="fas fa-times-circle" id={task.id} onClick={this.handleDelete}></i></div><br />{task.text}<br />Due Date<br />{task.date}</div>
                  )
                })
            }
          </div>
        </main>
      </div>
    )
  }
}

export default App;
