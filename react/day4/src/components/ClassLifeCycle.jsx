import {Component} from "react";


class ClassLifeCycle extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        console.log("componentDidMount")
    }

    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
      componentWillUnmount() {
    console.log("Component Unmounted");
  }
    render() {
    console.log("Render Method Called");

    return (
      <div>
        <h1>Lifecycle Methods</h1>
      </div>
    );
  }

}

export default ClassLifeCycle