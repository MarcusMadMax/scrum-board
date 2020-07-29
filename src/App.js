import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.backlog = [
      {
        id: 1,
        text: 'Save the planet'
      },
      {
        id: 2,
        text: 'Plant a tree'
      },
    ]
    this.todo = [
      {
        id: 1,
        text: 'Say hello'
      },
      {
        id: 2,
        text: 'Say goodby'
      },
    ]
    this.workip = [
      {
        id: 1,
        text: 'Do more work'
      },
      {
        id: 2,
        text: 'Have a break'
      },
    ]
    this.done = [
      {
        id: 1,
        text: 'Finaly finished'
      },
      {
        id: 2,
        text: 'Lets go home'
      },
      {
        id: 3,
        text: 'Lets go home'
      },
      {
        id: 4,
        text: 'Lets go home'
      },
      {
        id: 5,
        text: 'Lets go home'
      },
    ]
  }
  render() {
    return (
      <div className="wrap">
        <header>
          <div className="input">
            <form action="#" method="GET">
              <div className="formGroup newStory">
                <label htmlFor="newStory"></label>
                <input type="text" id="newStory" placeholder="New story" />
              </div>

              <div className="formGroup criteria">
                <label htmlFor="criteria"></label>
                <select name="criteria" id="criteria">
                  <option value="backlog">Backlog</option>
                  <option value="todo">Task to do</option>
                  <option value="inprogress">Work in progress</option>
                  <option value="done">Task done</option>
                </select>
              </div>

              <div className="dueColor">
                <div className="formGroup">
                  <label htmlFor="dueDate"></label>
                  <input type="text" id="dueDate" placeholder="Due date" />
                </div>

                <div className="formGroup">
                  <label htmlFor="color"></label>
                  <select name="color" id="color">
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="purple">Purple</option>
                </select>                </div>
              </div>
              <button>Add</button>
            </form>
          </div>
          <h1>Scrum Board</h1>
        </header>
        <main>
          <div className="entry backlog">
            <h1>Backlog</h1>
            {
              this.backlog.map((newLog) => {
                return (
                  <p>{newLog.text}</p>
                )
              })
            }
          </div>
          <div className="entry todo">
            <h1>Tasks to do</h1>
            {
              this.todo.map((newtodo) => {
                return (
                  <p>{newtodo.text}</p>
                )
              })
            }
          </div>
          <div className="entry workip">
            <h1>Work in progress</h1>
            {
              this.workip.map((newworkip) => {
                return (
                  <p>{newworkip.text}</p>
                )
              })
            }
          </div>
          <div className="entry done">
            <h1>Tasks done</h1>
            {
              this.done.map((newdone) => {
                return (
                  <p>{newdone.text}</p>
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
