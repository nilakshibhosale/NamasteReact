import React from "react"
class UserClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    }
    console.log("Child constructor")
  }
  async componentDidMount() {
    //why to use it? ---> to make API calls. why ? ---> as first it render and once render then api calls and again re-render the component as it does not want to wait till api load.
    const data = await fetch("https://api.github.com/users/nilakshibhosale")
    const json = await data.json()
    console.log("Child componentDidMount", json)
    this.setState({
      name: json.name,
      location: json.location,
    })
  }
  render() {
    console.log("Child render")
    // const {name, location} = this.props
    const {count, count2, name, location} = this.state
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            })
          }}
        >
          Increase Count
        </button>
        <h1>Count2:{count2}</h1>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>id: @nbhosle</h3>
      </div>
    )
  }
}
export default UserClass
