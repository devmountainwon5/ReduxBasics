export const addSubtract = str => {
	// looks at string and return an action object.
	// {
	//     type:'some_string',
	//     payload: 'someValueOptional'
    // }
    debugger
	if (str === '+') {
		return {
			type: 'add_number'
		};
	} else {
		return {
			type: 'subtract_number'
		};
	}
};