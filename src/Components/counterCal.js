import React, {Component} from 'react';
class CounterCal extends Component{
	constructor(props){
		super(props);
		this.state={
			count:0
		}
	}
	handleIncrement=()=>{
		this.setState((prevState)=>{
			return {count:prevState.count+1}
		})
	}
	render(){
		const {count}=this.state;
		return(
			<div>
			{this.props.render(this.state.count,this.handleIncrement)}
			</div>
		)
	}
}
export default CounterCal;