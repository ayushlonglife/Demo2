import React from 'react';
import propTypes from 'prop-types';
const Checkbox=({type='checkbox',name,checked=false,onChange})=>(
	<input type={type} name={name} checked={checked}  onChange={onChange}/>	
)

Checkbox.propTypes={
	
	type:propTypes.string,
	name:propTypes.string.isRequired,
	checked:propTypes.bool,
	onChange:propTypes.func.isRequired
}
export default Checkbox;