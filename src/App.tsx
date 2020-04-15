import * as React from 'react';
import { Button } from 'semantic-ui-react'

export interface IAppProps {
}

interface IState {
    changeColor: any;

}


export default class App extends React.Component<IAppProps,IState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {changeColor:""}
      

    }
    componentDidMount() {
      this.setState({ changeColor:"orange"})
     
  
    }
  

    public changColor = () => {
      this.setState({ changeColor:"yellow" })
    }

  public render() {
    return (

      <div style={{backgroundColor: this.state.changeColor}}  >
        <h1>{this.state.changeColor}</h1>
       <Button color="green"  size= "massive" animated="fade" content="Click Me" onClick={this.changColor}loading circular/>
     </div>
    );
  }
}