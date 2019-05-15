import React from 'react';
const Hero=(props)=>{
	if(props.heroName==='Ayush'){
		throw new Error('Not a hero');
	}
	return(
		<div>
		{props.heroName}
		</div>
	)
}
export default Hero;