import React,{unstable_profiler as Profiler} from 'react';
import View from './View';

class MemoComp extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:null
		}
	}
	
	generageFun=()=>{
		const nameArr=['Ayush','Alok','Aarav'];
		const name=nameArr[Math.floor(Math.random()*(nameArr.length))];
		
		return name;
		
	}
	
	fun=()=>{
			console.log("hiii")
				
			this.setState({
					
				name:"Ayush"
			})
		}
	
	render(){
		
		
		
		return(
			
			<div>
				<button onClick={this.fun}>ChangeName</button>
				<View name={this.state.name}/>
			</div>
			
		)
	}
}

export default MemoComp;