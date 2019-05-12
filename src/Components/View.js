import React,{memo} from 'react';
let View=memo(({name})=>{
	console.log("hiii");
	return <h1>Hi I am {name}</h1>
	
});
export default View;