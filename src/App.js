import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Test from "./Components/Test";
class App extends Component{
	constructor(props){
		super(props);
		this.inputRef=React.createRef();
		this.state={
			startDate:new Date(),
			name:"Ayush"
		}
		this.handleChangeDate=this.handleChangeDate.bind(this);
	}
	handleChangeDate(date){
		console.log(date);
		this.setState({startDate:date})
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		console.log(this.inputRef.current.value);
	}
	
	
  render(){
    return(
      <div className="App">
		<form onSubmit={this.handleSubmit}>
		<Test data={this.state.startDate.toLocaleString()} onchangeValue={this.inputRef}/>
		<DatePicker dateFormat="MMMM d, yyyy" selected={this.state.startDate} onChange={this.handleChangeDate}/>
		<input type="submit" value="Submit"/>
		</form>
      </div>
    );
  }
}
export default App;
