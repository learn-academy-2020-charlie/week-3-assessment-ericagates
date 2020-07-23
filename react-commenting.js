// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. This initializes the state objects that are dynamic
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. this updates the userinput state to the value entered wherever the robot method is called
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. destructure userInput to simplify code
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. the robot method inside this class called whenever there's a change to this input */}
          onChange={ this.robot }
          {/* 5. this set the value inside the input to whatever the userInput state is set to */}
          value={ userInput }
        />

        <div>
          {/* 6. Call the Good Robot component*/}
          <GoodRobot
            {/* 7. pass the userInput variable to this component so that it can reference/call that props*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. division that wraps everything that is rendered to the page 
      <div>
        <h3>Good Robot</h3>
        {/* 9. calling the current state or content of userinput and display it */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Send the GoodRobot component wherever it's called
export default GoodRobot
