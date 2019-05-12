const initialState={
	age:20,
	loading:false
}

const reducer=(state=initialState,actions)=>{
	const newState={...state}
	switch(actions.type){
		case 'AGE_UP':
			
			newState.age+=actions.value;
			newState.loading=false;
			break;
		case 'AGE_DOWN':
			newState.age-=actions.value;
			break;
		case 'LOADING':
			newState.loading=true;
	}
	return newState;
}
export default reducer;