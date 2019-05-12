import React from 'react';
import checkboxes from './checkboxes';
import Checkbox from './checkbox';
import Select from 'react-select';

const options=[
	{value: 'chocolate', label: 'Chocolate'},
	{value: 'strawberry', label: 'Strawberry'},
	{value: 'vanilla', label: 'Vanilla'}
];

class CheckboxContainer extends React.Component{
	constructor(props){
    super(props);
	this.state={
		checkedItems: new Map(),
		selectedOption:null,
		someProperty:{
			flag:{
				
				a:false
			}
		}
	}
	this.formRef=React.createRef();
	}
	handleChange=(e)=>{
		let name=e.target.name;
		let isChecked =e.target.checked
		this.setState((prevState)=>({
		  
		  checkedItems:prevState.checkedItems.set(name,isChecked)
		}));
		var pro={...this.state.someProperty};
		pro.flag.a=true;
		this.setState({
			pro
		})
		console.log(this.state.someProperty.flag.a);
	}
	
	handleSelectChange=(e)=>{
		let name=e.target.name;
		let value=e.target.value;
		this.setState({
			selectedOption:value
		})
	}
	
	handleSubmit=(e)=>{
		e.preventDefault();
		console.log(this.state.checkedItems);
	}
  
  render(){
	return(
		<form onSubmit={this.handleSubmit}>
			<div>
			{
				checkboxes.map((item)=>(
					<label key={item.key}>
						{item.name}
						<Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)}  onChange={this.handleChange}/>
					</label>
				))
			}
			</div>
			<select name="selectBox" onChange={this.handleSelectChange} value={this.state.selectedOption}>
			{
				options.map((optionList)=>(
				<option value={optionList.value}  key={optionList.value}> 
					{optionList.label}
				</option>
					
				))
			}
			
			</select>
			<input type="submit" value="Submit" id="submit"/>
		</form>
	)
  }
}

export default CheckboxContainer;