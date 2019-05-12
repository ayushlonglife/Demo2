import React, {Component} from 'react';
class Hover extends Component{
	
	render(){
		const {count,handleIncrement}=this.props;
		return(
			<div>
				<button onMouseOver={handleIncrement}>OnMouseHover {count}</button>
			</div>
		)
	}
}
export default Hover;