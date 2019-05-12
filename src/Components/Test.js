import React, { Component } from 'react';
import {withRouter} from  'react-router-dom';

//import Demo1 from './demo';
class Test extends Component{
	 constructor (props) {
        super(props);
    }
	
  render(){
    return(
		<div>
			<div>You selected following date {this.props.data}</div>
			<input type="text" name="textBox" ref={this.props.onchangeValue}/>
		</div>
    );
  }
}
export default (Test);
