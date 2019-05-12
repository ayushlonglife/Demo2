import React, {Component} from 'react';
class Counter extends Component{
	render(){
		const {count,handleIncrement}=this.props
		return(
			<div>
				<button onClick={handleIncrement}>Increment {count}</button>
			</div>
		)
	}
}
export default Counter;