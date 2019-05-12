import React,{useState,useEffect} from 'react';

function Demo1(){
	const [count,setCount]=useState(0);	
	useEffect(()=>{
		document.title = `You clicked ${count} times`;
	});
	return(
		<div>
			count:{count}
			<button onClick={()=> setCount(count + 1)}>Increment Count</button>
			<button onClick={() => setCount(count - 1)}>Decrement Count</button>
		</div>
	);
}

export default Demo1;